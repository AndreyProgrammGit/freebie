import {
  useState,
  useContext,
  createContext,
  type FC,
  type ReactNode,
  useEffect,
} from "react";

import { useGetProductsQuery } from "../redux/slice/api/products";

export type FilterState = {
  [blockName: string]: {
    [item: string]: boolean;
  };
};

type FilterContextType = {
  filteredArr: any;
  filters: FilterState | null;
  handleChangeChecked: ({
    blockName,
    item,
  }: {
    blockName: string;
    item: string;
  }) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState | null>(null);
  const { data: products } = useGetProductsQuery();
  const [serialization, setSerialization] = useState<any>([]);
  const [filteredArr, setFitleredArr] = useState<any>([]);

  useEffect(() => {
    if (products) {
      setSerialization(products);
      setFitleredArr(products);
      const tmp: FilterState = {
        brand: {},
        category: {},
      };

      products.forEach((item: any) => {
        if (item.brand) {
          tmp.brand[item.brand] = false;
        }
        if (item.category) {
          tmp.category[item.category] = false;
        }
      });

      setFilters(tmp);
    }
  }, [products]);

  const handleChangeChecked = ({
    blockName,
    item,
  }: {
    blockName: string;
    item: string;
  }) => {
    setFilters((prev) => {
      if (!prev) return prev;

      const updated = {
        ...prev,
        [blockName]: {
          ...prev[blockName],
          [item]: !prev[blockName][item],
        },
      };

      const activeFilters = Object.entries(updated).reduce(
        (acc, [block, values]) => {
          const active = Object.entries(values)
            .filter(([_, isActive]) => isActive)
            .map(([name]) => name);
          if (active.length > 0) {
            acc[block] = active;
          }
          return acc;
        },
        {} as { [key: string]: string[] }
      );

      const filtered = serialization.filter((product: any) => {
        return Object.entries(activeFilters).every(([block, activeValues]) =>
          activeValues.includes(product[block])
        );
      });

      setFitleredArr(filtered);
      return updated;
    });
  };

  return (
    <FilterContext.Provider
      value={{ filters, handleChangeChecked, filteredArr }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

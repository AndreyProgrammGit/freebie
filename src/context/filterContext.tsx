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
  const [selectedFitlers, setSelectedFilters] = useState<any>([]);
  const { data: products } = useGetProductsQuery();
  const [serialization, setSerialization] = useState<any>([]);

  useEffect(() => {
    if (products) {
      setSerialization(products);
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
    const tmp = Object.entries(filters);
    tmp.forEach(([key, value]) => {
      products.map((el) => {
        if (key in el && value) {
          console.log(Object.entries(value).filter((item) => Boolean(item[1])));
        }
      });
    });

    setFilters((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [blockName]: {
          ...prev[blockName],
          [item]: !prev[blockName][item],
        },
      };
    });
  };

  return (
    <FilterContext.Provider value={{ filters, handleChangeChecked }}>
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

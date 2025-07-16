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
  brands: FilterState | null;
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
  const [brands, setBrands] = useState<FilterState | null>(null);
  const { data: products } = useGetProductsQuery();

  useEffect(() => {
    if (products) {
      const tmp: FilterState = {
        brands: {},
        size: {},
      };

      products.forEach((item: any) => {
        if (item.brand) {
          tmp.brands[item.brand] = false;
        }
        if (item.size) {
          tmp.size[item.size] = false;
        }
      });

      setBrands(tmp);
    }
  }, [products]);

  const handleChangeChecked = ({
    blockName,
    item,
  }: {
    blockName: string;
    item: string;
  }) => {
    setBrands((prev) => {
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
    <FilterContext.Provider value={{ brands, handleChangeChecked }}>
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

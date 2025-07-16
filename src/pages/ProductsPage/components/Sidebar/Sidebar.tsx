import React, { useEffect, useState } from "react";
import Accordion from "../../../../components/Accordion/Accordion";
import { useFilter } from "../../../../context/filterContext";

export type Product = {
  id: string;
  name: string;
  brand: string;
};

const Sidebar: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const { brands, handleChangeChecked } = useFilter();

  return (
    <Accordion
      flag={flag}
      setFlag={setFlag}
      options={brands}
      handleChangeChecked={handleChangeChecked}
    />
  );
};

export default Sidebar;

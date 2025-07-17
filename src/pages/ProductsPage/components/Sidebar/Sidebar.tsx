import React, { useEffect, useState } from "react";
import Accordion from "../../../../components/Accordion/Accordion";
import { useFilter } from "../../../../context/filterContext";

export type Product = {
  id: string;
  name: string;
  brand: string;
};

const Sidebar: React.FC = () => {
  const { filters, handleChangeChecked } = useFilter();

  return (
    <Accordion options={filters} handleChangeChecked={handleChangeChecked} />
  );
};

export default Sidebar;

import React, { type FC } from "react";

type TProps = {
  children: React.ReactNode;
};

const Container: FC<TProps> = ({ children }) => (
  <div style={{ width: "1440px", margin: "0 auto" }}>{children}</div>
);

export default Container;

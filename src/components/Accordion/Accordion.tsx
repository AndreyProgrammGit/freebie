import React, { type FC } from "react";

import classes from "./Accordion.module.scss";
import type { FilterState } from "../../context/filterContext";

interface TProps {
  options: FilterState | null;
  flag: boolean;
  setFlag: (prev: any) => void;
  handleChangeChecked: ({
    blockName,
    item,
  }: {
    blockName: string;
    item: string;
  }) => void;
}

const Accordion: FC<TProps> = ({
  flag,
  setFlag,
  options,
  handleChangeChecked,
}) => {
  console.log(options);
  return (
    <div className={classes.accordion}>
      <div className={classes.accordion__header}>
        <button onClick={() => setFlag((prev: boolean) => !prev)}>Open</button>
      </div>
      {flag && (
        <>
          <input type="text" name="" id="" />
          <div className={classes.accordion__options}>
            {options &&
              Object.keys(options).map((blockName) => (
                <>
                  {blockName}
                  {Object.keys(options[blockName]).map((item) => (
                    <>
                      <span>{item}</span>
                      <input
                        type="checkbox"
                        checked={options[blockName][item]}
                        onChange={(e) =>
                          handleChangeChecked({ blockName, item })
                        }
                      />
                    </>
                  ))}
                </>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;

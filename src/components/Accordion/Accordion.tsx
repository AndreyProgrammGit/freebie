import React, { useState, type FC } from "react";
import type { FilterState } from "../../context/filterContext";
import classes from "./Accordion.module.scss";

interface TProps {
  options: FilterState | null;
  handleChangeChecked: ({
    blockName,
    item,
  }: {
    blockName: string;
    item: string;
  }) => void;
}

const Accordion: FC<TProps> = ({ options, handleChangeChecked }) => {
  const [openBlocks, setOpenBlocks] = useState<string[]>([]);

  const toggleBlock = (blockName: string) => {
    setOpenBlocks((prev) =>
      prev.includes(blockName)
        ? prev.filter((name) => name !== blockName)
        : [...prev, blockName]
    );
  };

  if (!options) return null;

  return (
    <div className={classes.accordion}>
      {Object.keys(options).map((blockName) => (
        <div key={blockName} className={classes.accordion__block}>
          <div className={classes.accordion__header}>
            <span>
              {blockName.charAt(0).toUpperCase() + blockName.slice(1)}
            </span>
            <button onClick={() => toggleBlock(blockName)}>
              {openBlocks.includes(blockName) ? "Close" : "Open"}
            </button>
          </div>

          {openBlocks.includes(blockName) && (
            <div className={classes.accordion__content}>
              <div className={classes.accordion__search}>
                <input type="text" />
              </div>
              {Object.keys(options[blockName]).map((item) => (
                <label key={item} className={classes.accordion__item}>
                  <input
                    type="checkbox"
                    checked={options[blockName][item]}
                    onChange={() => {
                      handleChangeChecked({ blockName, item });
                    }}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

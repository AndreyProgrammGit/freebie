import { useEffect, useState, type FC } from "react";
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
  const [valueInput, setValueInput] = useState({});
  const [debounce, setDebouncedInput] = useState({});

  useEffect(() => {
    const timers = Object.entries(valueInput).map(([block, value]) => {
      return setTimeout(() => {
        setDebouncedInput((prev) => ({
          ...prev,
          [block]: value,
        }));
      }, 300);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [valueInput]);

  const toggleBlock = (blockName: string) => {
    setOpenBlocks((prev) =>
      prev.includes(blockName)
        ? prev.filter((name) => name !== blockName)
        : [...prev, blockName],
    );
  };

  if (!options) return null;

  return (
    <div className={classes.accordion}>
      {Object.keys(options).map((blockName) => (
        <div key={blockName} className={classes.accordion__block}>
          <div
            onClick={() => toggleBlock(blockName)}
            className={classes.accordion__header}
          >
            <span>
              {blockName.charAt(0).toUpperCase() + blockName.slice(1)}
            </span>
            <span
              className={
                openBlocks.includes(blockName)
                  ? classes.arrow__open
                  : classes.arrow
              }
            >
              ⮟
            </span>
          </div>

          <div
            className={`${classes.accordion__content} ${
              openBlocks.includes(blockName)
                ? classes["accordion__content--open"]
                : ""
            }`}
          >
            <div className={classes.accordion__search}>
              <input
                placeholder="Search"
                type="text"
                onChange={(e) =>
                  setValueInput((prev) => ({
                    ...prev,
                    [blockName]: e.target.value,
                  }))
                }
              />
            </div>
            {Object.keys(options[blockName])
              .filter((item) =>
                item
                  .toLowerCase()
                  .includes((debounce[blockName] || "").toLowerCase()),
              )
              .map((item) => (
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
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import type { FC } from "react";

type TProps = {
  flag?: boolean;
};
const HeartIcon: FC<TProps> = ({ flag = false }) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={flag ? "red" : "none"}
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6c-1.7-1.7-4.5-1.7-6.2 0l-0.6 0.6-0.6-0.6c-1.7-1.7-4.5-1.7-6.2 0-1.7 1.7-1.7 4.5 0 6.2l6.8 6.8 6.8-6.8c1.7-1.7 1.7-4.5 0-6.2z" />
    </svg>
  );
};

export default HeartIcon;

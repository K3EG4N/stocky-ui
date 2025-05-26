import type { IIcon } from "../interfaces/IIcon";

export const Check = ({ className }: IIcon) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={`${className ?? ""}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

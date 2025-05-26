import type { IButton } from "../interfaces/IClickable";

export const Button = ({
  text,
  onClick,
  disabled,
  icon,
  iconPlacement = "left",
  apparience = "solid",
}: IButton) => {
  let buttonContent;
  switch (apparience) {
    case "solid":
      buttonContent = (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`w-full ${
            iconPlacement === "left" ? "" : "flex-row-reverse"
          }  outline-none flex justify-center gap-2.5 items-center py-2 rounded-sm transition-all font-medium text-[15px] ${
            disabled
              ? "cursor-not-allowed border-gray-300/35 text-gray-700/35 bg-gray-200/80"
              : `cursor-pointer text-white bg-jade-500/95  hover:bg-jade-500 `
          }`}
        >
          {icon}
          {text}
        </button>
      );
      break;
    default:
      buttonContent = (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`w-full ${
            iconPlacement === "left" ? "" : "flex-row-reverse"
          }  flex justify-center items-center gap-2.5 outline-none border  py-2 rounded-sm transition-all font-medium text-[15px]
        ${
          disabled
            ? "cursor-not-allowed text-gray-700/35 bg-gray-200/10 border-[#c5cbc87e]"
            : `cursor-pointer hover:bg-gray-400/10 text-[#1A211E] border-[#c5cbc8]`
        }`}
        >
          {icon}
          {text}
        </button>
      );
      break;
  }

  return <>{buttonContent}</>;
};

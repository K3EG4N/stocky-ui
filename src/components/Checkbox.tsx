import { useState } from "react";
import { Check } from "../icons/FormsIcons";
import type { ICheckbox } from "../interfaces/IClickable";

export const Checkbox = ({ text, onCheck }: ICheckbox) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    if (onCheck) {
      onCheck(!checked);
    }
  };

  return (
    <section
      className="flex gap-1.5 justify-center items-center w-fit cursor-pointer group"
      onClick={handleClick}
    >
      <div
        className={`size-[14.5px] transition-all rounded-xs border outline-none flex justify-center items-center ${
          checked
            ? "border-jade-500 bg-jade-500/90 group-hover:bg-jade-500"
            : "border-gray-400 group-hover:bg-gray-200/30"
        }`}
      >
        {checked && (
          <Check className="text-white size-[11px] stroke-[4] mt-[1px] ml-[1px]" />
        )}
      </div>
      {text && <span className="text-sm font-medium">{text}</span>}
    </section>
  );
};

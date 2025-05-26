import { useEffect, useState } from "react";
import type { IInput } from "../interfaces/IChangeable";

export const Input = ({
  type,
  placeholder,
  title,
  value,
  onChange,
  disabled,
  required,
}: IInput) => {
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);

  const handleChangeInput = (value: string) => {
    setContent(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <section className="flex flex-col text-sm">
      {title && (
        <label
          className={`block ${
            disabled
              ? "text-gray-800/50"
              : `${required && !content ? "text-red-500" : "text-gray-800"}`
          }  text-sm font-semibold mb-1`}
        >
          {title}
        </label>
      )}
      <input
        type={type ?? "text"}
        onChange={(e) => handleChangeInput(e.target.value)}
        defaultValue={value}
        disabled={disabled}
        placeholder={placeholder}
        className={`
            border-[1.5px] min-w-[280px] transition-all rounded-sm p-2 focus:outline-none ring-0 focus:ring-2 ring-transparent
            ${
              disabled
                ? "cursor-not-allowed border-gray-300/35 text-gray-700/35 bg-gray-200/20"
                : `border-gray-300 ${
                    required && !content
                      ? "border-red-500 ring-red-20 focus:ring-red-400/60 not-focus:text-red-500"
                      : "focus:border-jade-400 focus:ring-jade-400/60 not-focus:text-gray-500"
                  }`
            }`}
      />

      {required && (
        <label
          className={`text-red-500 text-xs font-medium mt-1 ml-0.5 transition-all duration-[400ms] ${
            required && !content ? "opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          {`The ${title?.toLowerCase()} field is required`}
        </label>
      )}
    </section>
  );
};

import type { IGeneric } from "./IGeneric";

interface IChangeable extends IGeneric {
  onChange?: (value: string) => void;
  //   onBlur?: () => void;
  //   onFocus?: () => void;
  //   onKeyPress?: (key: string) => void;
  //   onKeyDown?: (key: string) => void;
  //   onKeyUp?: (key: string) => void;
}

export interface IInput extends IChangeable {
  value?: string;
  title?: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  required?: boolean;
}

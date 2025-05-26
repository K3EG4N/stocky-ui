import type { IGeneric } from "./IGeneric";

interface IClickable extends IGeneric {
  onClick?: () => void;
}

export interface IButton extends IClickable {
  text?: string;
  icon?: React.ReactNode;
  iconPlacement?: "left" | "right";
  apparience?: "ghost" | "solid";
}

export interface ICheckbox extends IClickable {
  text?: string;
  onCheck?: (checked: boolean) => void;
}

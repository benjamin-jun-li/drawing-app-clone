import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface OrgItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export interface HintProps extends LayoutProps {
  label: string,
  side? : "top" | "bottom" | "left" | "right",
  align? : "start" | "center" | "end",
  sideOffset?: number,
  alignOffset?: number 
}

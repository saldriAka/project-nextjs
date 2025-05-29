import { LucideIcon } from "lucide-react";

export type TopMenuItems = {
  title: string;
  href: string;
  isActive: boolean;
  disabled: boolean;
};

export type SideMenuItems = {
  title: string;
  url: string;
  icon: LucideIcon; 
}
import { ChangeEvent } from "react";

export interface MenuItemsProps {
  isShowLanguage: boolean;
  handleMultiLanguage: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleGptSearch: () => void;
  handleSignOut: () => void;
  SUPPORT_LANGUAGE: { identifier: string; name: string }[];
}

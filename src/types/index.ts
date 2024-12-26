export interface Item {
  category: "weapon" | "armor" | "potion" | "resource";
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SideBarAndInventoryProps {
  currentInventory: string;
  setCurrentInventory: (currentInventory: string) => void;
}
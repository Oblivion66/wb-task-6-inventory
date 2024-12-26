import { Item } from "../types";

export interface validationProps {
  ROWS: number;
  COLUMNS: number;
  items: Item[];
}

export const validateInventory = ({
  ROWS,
  COLUMNS,
  items,
}: validationProps) => {
  if (!items || items.length === 0) {
    return "Инвентарь пуст";
  }

  if (ROWS <= 0 || COLUMNS <= 0) {
    return "Некорректный формат инвентаря";
  }

  for (const item of items) {
    if (item.x < 0 || item.x >= COLUMNS) {
      return "Некорректное значение X";
    }
    if (item.y < 0 || item.y >= ROWS) {
      return "Некорректное значение Y";
    }
    if (item.width < 0 || item.width > COLUMNS - item.x) {
      return "Некорректное значение ширины";
    }
    if (item.height < 0 || item.height > ROWS - item.y) {
      return "Некорректное значение высоты";
    }

    if (
      !["weapon", "armor", "potion", "artifact", "resource"].includes(
        item.category
      )
    )
      return "Некорректная категория предмета: " + item.category;

    if (
      !["common", "uncommon", "rare", "epic", "legendary"].includes(item.rarity)
    )
      return "Некорректный тип редкости предмета: " + item.rarity;

    for (const anotherItem of items) {
      if (anotherItem === item) continue;
      const isOverlap = !(
        item.x + item.width <= anotherItem.x ||
        item.x >= anotherItem.x + anotherItem.width ||
        item.y + item.height <= anotherItem.y ||
        item.y >= anotherItem.y + anotherItem.height
      );
      if (isOverlap) {
        return `Некоторые предметы перекрывают друг друга!`;
      }
    }

  }
  return null;
};

import { InventoryItemProps } from "./InventoryItem.types";
import "./InventoryItem.scss";

export const InventoryItem = ({ item, inventoryWidth }: InventoryItemProps) => {
  const { category, rarity, width, height } = item;
  const cell = 600 / inventoryWidth - 2;

  return (
    <div
      className={"inventory-item"}
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
        position: "absolute",

      }}>
      <img
        className={`inventory-item__image`} 
        src={`/images/${category}-${rarity}.png`}
        alt={category}
        style={{

          width: `${width * cell - 10 }px`,
          height: `${height * cell - 10}px`,

        }}
      />
    </div>
  );
};

import { InventoryItemProps } from "./InventoryItem.types";

export const InventoryItem = ({ item, inventoryWidth }: InventoryItemProps) => {
  const { category, rarity, width, height } = item;
  const cell = 600 / inventoryWidth - 2;

  return (
    <div
      className={"inventory-item"}
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
      }}>
      <img
      className="inventory-item__image"
        src={`/images/${category}2.png`}
        alt={category}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${width * cell}px`,
          height: `${height * cell}px`,
          objectFit: "cover",
        }}
      />
    </div>
  );
};

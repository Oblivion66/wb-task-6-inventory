import { Item } from "../../types";
import { InventoryItem } from "../InventoryItem";
import { rarityClasses } from "./InventoryGrid.consts";
import "./InventoryGrid.scss";
import { InventoryGridProps } from "./InventoryGrid.types";

export const InventoryGrid = ({ rows, columns, items }: InventoryGridProps) => {
  const grid = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(null));
  const occupiedCells = new Set<string>();

  items.forEach((item) => {
    for (let row = item.y; row < item.y + item.height; row++) {
      for (let col = item.x; col < item.x + item.width; col++) {
        const key = `${row}-${col}`;
        grid[row][col] = item;

        if (row === item.y && col === item.x) {
          occupiedCells.add(key);
        }
      }
    }
  });

  return (
    <div
      className="inventory__grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const key = `${rowIndex}-${colIndex}`;
          const rarityClass =
            cell && cell.rarity
              ? rarityClasses[cell.rarity as Item["rarity"]]
              : "";

          return (
            <div key={key} className={`cell item-${rarityClass}`}>
              {cell && occupiedCells.has(key) && (
                <InventoryItem item={cell} inventoryWidth={columns} />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

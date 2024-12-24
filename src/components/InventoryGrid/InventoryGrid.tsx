import "./InventoryGrid.scss";
import { InventoryGridProps } from "./InventoryGrid.types";

export const InventoryGrid = ({ rows, columns, items }: InventoryGridProps) => {
  const grid = Array(rows)
    .fill(0)
    .map(() => Array(columns).fill(0));
  const occupiedCells = new Set<string>();

  // items.forEach(item => {
  //     for (let y = item.y; y < item.y + item.height; y++) {
  //         for (let x = item.x; x < item.x + item.width; x++) {
  //             occupiedCells.add(`${x},${y}`);
  //         }
  //     }
  // });

  return (
    <div className="inventory-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="inventory-grid__row">
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              className={`inventory-grid__cell ${
                occupiedCells.has(`${columnIndex},${rowIndex}`)
                  ? "inventory-grid__cell--occupied"
                  : ""
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

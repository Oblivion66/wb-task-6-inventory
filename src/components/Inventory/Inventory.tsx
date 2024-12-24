import { useEffect, useState } from "react";
import { InventoryGrid } from "../InventoryGrid/InventoryGrid";
import "./Inventory.scss";
import { SideBar } from "../SideBar/SideBar";
import { Item } from "../../types";
import { validateInventory } from "../../utils/validation";

export const Inventory = () => {
  const [currentInventory, setCurrentInventory] = useState<string>("1");
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(
          `/wb-task-6-inventory/data/inventory-${currentInventory}.json`
        );
        if (!response.ok) {
          throw new Error("Инвентарь не найден");
        }
        const data = await response.json();

        const validationError = validateInventory({
          items: data.items,
          ROWS: data.rows,
          COLUMNS: data.columns,
        });
        if (validationError) {
          setError(validationError);
        } else {
          setItems(data.items);
          setRows(data.rows);
          setColumns(data.columns);
          setError(null);
        }
      } catch (error) {
        console.error("Не удалось загрузить инвентарь:", error);
        setError("Не удалось загрузить инвентарь");
      }
    };
    fetchInventory();
  }, [currentInventory]);

  return (
    <div className="inventory__wrapper">
      {error ? (
        <h1 className="inventory__error text">{error}</h1>
      ) : (
        <InventoryGrid rows={rows} columns={columns} items={items} />
      )}
      <SideBar
        currentInventory={currentInventory}
        setCurrentInventory={setCurrentInventory}
      />
    </div>
  );
};

import { FoodDTO } from '../../Database';

export interface FoodEditTableProps {
  Table: { TableTitle: string; Col1: string; Col2: string; Col3: string };
  foodRows: FoodDTO[];
  removeFoodFromIndex(index: number): void;
  editFoodFromIndex(index: number): void;
  addFood(): void;
}

export interface foodRowsDTO {
  measure: string;
  name: string;
}

export interface FoodEditTableProps {
  Table: { TableTitle: string; Col1: string; Col2: string; Col3: string };
  foodRows: foodRowsDTO[];
  removeFoodFromIndex(index: number): void;
  editFoodFromIndex(index: number): void;
  addFood(): void;
}

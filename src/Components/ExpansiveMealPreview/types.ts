import { MealDataDTO } from '../../Pages/MealSelection/types';

export interface ExpansiveMealPreviewProps {
  onEdit(meal: MealDataDTO): void;
  onDelete(mealTitle: string): void;
  meals: MealDataDTO[];
}

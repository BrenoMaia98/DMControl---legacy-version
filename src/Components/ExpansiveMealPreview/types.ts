import { MealPreviewData } from '../../Pages/FoodAndMealManager/types';

export interface ExpansiveMealPreviewProps {
  onEdit(meal: MealPreviewData): void;
  onDelete(): void;
  meals: MealPreviewData[];
}

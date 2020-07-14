import { MealPreviewData } from '../../Pages/FoodAndMealManager/types';

export interface ExpansiveMealPreviewProps {
  onEdit(): void;
  onDelete(): void;
  meals: MealPreviewData[];
}

import React from 'react';
import { Text } from 'react-native';
import { ExpansiveMealPreviewProps } from './types';

import {
  Container,
  RowAlignLeft,
  FoodNamesContainer,
  FoodName,
  CustomAccordion,
  BorderTopFoodItem,
} from './styles';
import IconButton from '../IconButton';
import { ColorPalette } from '../../Constants/ColorPalette';
import { IconEnum } from '../../Utils/PickIcon/types';
import { MealDataDTO } from '../../Pages/MealSelection/types';

const ExpansiveMealPreview: React.FC<ExpansiveMealPreviewProps> = ({
  onEdit,
  meals,
  onDelete,
}) => {
  const renderExpansive = (item: MealDataDTO) => {
    return (
      <Container onPress={() => onEdit(item)}>
        <RowAlignLeft>
          <IconButton
            onPress={() => onDelete(item.title)}
            IconColor={ColorPalette.red}
            defaultIcon={IconEnum.MdDelete}
            size="md"
          />
          <IconButton
            onPress={() => onEdit(item)}
            defaultIcon={IconEnum.FiEdit}
            size="md"
          />
        </RowAlignLeft>
        <FoodNamesContainer>
          {item.foods.map((food, index) => {
            if (index !== 0)
              return (
                <BorderTopFoodItem>
                  <FoodName>{food.foodName}</FoodName>
                </BorderTopFoodItem>
              );
            return <FoodName>{food.foodName}</FoodName>;
          })}
        </FoodNamesContainer>
      </Container>
    );
  };

  return (
    <CustomAccordion
      dataArray={meals}
      expanded={0}
      headerStyle={{
        backgroundColor: '#fff',
        marginTop: 10,
        borderWidth: 1,
        borderColor: ColorPalette.gray,
      }}
      renderContent={(item) => renderExpansive(item)}
    />
  );
};

export default ExpansiveMealPreview;

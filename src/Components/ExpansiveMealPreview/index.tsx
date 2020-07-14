import React from 'react';
import { Text } from 'react-native';
import { ExpansiveMealPreviewProps } from './types';

import {
  Container,
  RowAlignLeft,
  FoodNamesContainer,
  FoodName,
  CustomAccordion,
  TitleRow,
} from './styles';
import IconButton from '../IconButton';
import { ColorPalette } from '../../Constants/ColorPalette';
import { IconEnum } from '../../Utils/PickIcon/types';
import { MealPreviewData } from '../../Pages/FoodAndMealManager/types';

const ExpansiveMealPreview: React.FC<ExpansiveMealPreviewProps> = ({
  onEdit,
  meals,
  onDelete,
}) => {
  const renderExpansive = (item: MealPreviewData) => {
    return (
      <Container>
        <RowAlignLeft>
          <IconButton
            onPress={() => onDelete()}
            IconColor={ColorPalette.red}
            defaultIcon={IconEnum.MdDelete}
            size="md"
          />
          <IconButton
            onPress={() => onEdit()}
            defaultIcon={IconEnum.FiEdit}
            size="md"
          />
        </RowAlignLeft>
        <FoodNamesContainer>
          {item.foodNames.map((food) => (
            <FoodName>{food}</FoodName>
          ))}
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

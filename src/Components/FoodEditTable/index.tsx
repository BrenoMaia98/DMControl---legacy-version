import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Row } from 'native-base';
import { FoodEditTableProps } from './types';
import { TData, TText, TRow, TTitle, JustifyCenter } from './styles';
import IconButton from '../IconButton';
import { IconEnum } from '../../Utils/PickIcon/types';
import { ColorPalette } from '../../Constants/ColorPalette';

const FoodEditTable: React.FC<FoodEditTableProps> = ({
  Table,
  foodRows,
  removeFoodFromIndex,
  editFoodFromIndex,
  addFood,
}) => {
  const { Col1, Col2, Col3, TableTitle } = Table;
  return (
    <>
      <TTitle>{TableTitle}</TTitle>
      <TRow>
        <TData>
          <TText>{Col1}</TText>
        </TData>
        <TData>
          <TText>{Col2}</TText>
        </TData>
        <TData>
          <TText>{Col3}</TText>
        </TData>
      </TRow>
      <FlatList
        data={foodRows}
        renderItem={({ item, index }) => (
          <TRow>
            <TData>
              <TText>{item.name}</TText>
            </TData>
            <TData>
              <TText>{item.measure}</TText>
            </TData>
            <TData>
              <Row>
                <IconButton
                  onPress={() => {
                    removeFoodFromIndex(index);
                  }}
                  IconColor={ColorPalette.red}
                  BackGroundColor="rgba(0,0,0,0)"
                  defaultIcon={IconEnum.MdDelete}
                />
                <IconButton
                  onPress={() => {
                    editFoodFromIndex(index);
                  }}
                  IconColor={ColorPalette.green}
                  defaultIcon={IconEnum.GoPencil}
                />
              </Row>
            </TData>
          </TRow>
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
      <JustifyCenter>
        <IconButton
          onPress={() => {
            addFood();
          }}
          IconColor={ColorPalette.green}
          defaultIcon={IconEnum.AiOutlinePlusCircle}
          size="lg"
        />
      </JustifyCenter>
    </>
  );
};

export default FoodEditTable;

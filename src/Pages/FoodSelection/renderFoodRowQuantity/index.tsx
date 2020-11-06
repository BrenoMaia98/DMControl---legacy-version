import React from 'react';
import { Text, Row, Col, Radio } from 'native-base';
import { IconEnum } from '../../../Utils/PickIcon/types';
import { FoodDTO } from '../../../Database';
import { OtherQuantityinput, InputsRows, RowContainer } from './styles';
import IconButton from '../../../Components/IconButton';
import { ColorPalette } from '../../../Constants/ColorPalette';

type renderProps = {
  item: FoodDTO;
  index: number;
  deleteFoodAtIndex(index: number): void;
  onQuantityChange(
    index: number,
    value: string,
    isAlreadyChecked?: boolean
  ): void;
  quantity: string[];
};

const renderFoodRowQuantity = ({
  item,
  index,
  deleteFoodAtIndex,
  onQuantityChange,
  quantity,
}: renderProps): JSX.Element => {
  return (
    <RowContainer>
      <Row>
        <Col>
          <Text>{item.foodName}</Text>
        </Col>
        <Col>
          <Text>{item.measure}</Text>
        </Col>
        <Col>
          <IconButton
            onPress={() => deleteFoodAtIndex(index)}
            defaultIcon={IconEnum.Delete}
            IconColor={ColorPalette.red}
          />
        </Col>
      </Row>
      <Text>Quantity:</Text>
      <InputsRows>
        <Row>
          <Text
            style={{
              paddingRight: 5,
              alignSelf: 'center',
            }}
          >
            1
          </Text>
          <Radio
            selected={quantity[index] === '1'}
            onPress={() => {
              onQuantityChange(index, '1', quantity[index] === '1');
            }}
          />
        </Row>
        <Row>
          <Text
            style={{
              paddingRight: 5,
              alignSelf: 'center',
            }}
          >
            2
          </Text>
          <Radio
            selected={quantity[index] === '2'}
            onPress={() => {
              onQuantityChange(index, '2', quantity[index] === '2');
            }}
          />
        </Row>
        <Row>
          <Text
            style={{
              paddingRight: 5,
              alignSelf: 'center',
            }}
          >
            3
          </Text>
          <Radio
            selected={quantity[index] === '3'}
            onPress={() => {
              onQuantityChange(index, '3', quantity[index] === '3');
            }}
          />
        </Row>
        <OtherQuantityinput
          keyboardType="numeric"
          placeholder="Other quantity"
          onChangeText={(text: string) => onQuantityChange(index, text)}
        />
      </InputsRows>
    </RowContainer>
  );
};

export default renderFoodRowQuantity;

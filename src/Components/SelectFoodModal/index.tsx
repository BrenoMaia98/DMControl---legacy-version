import React from 'react';

import { FlatList, Text } from 'react-native';
import {
  ModalContainer,
  TitleInput,
  FoodName,
  Content,
  FoodRow,
} from './styles';
import { SelectFoodModalProps, mockFoodData } from './types';
import { FoodDTO } from '../../Database';
import Strings from '../../Constants/Texts/Strings';

const SelectFoodModal: React.FC<SelectFoodModalProps> = ({
  visible,
  selectedFood,
  onClose,
}) => {
  const [inputValue, setInputValue] = React.useState<string>('Batata');
  const [foodData, setFoodData] = React.useState<FoodDTO[]>([]);
  const componentLanguage = Strings.Components.SelectFoodModal.English;
  const { InputLabel, Title } = componentLanguage;

  React.useEffect(() => {
    setFoodData(JSON.parse(mockFoodData) as FoodDTO[]);
  }, []);

  React.useEffect(() => {
    setInputValue(selectedFood || '');
  }, [selectedFood]);

  return (
    <>
      {visible && (
        <ModalContainer
          onPress={() => {
            onClose();
          }}
        >
          <Content>
            <Text>{Title}</Text>
            <Text>{InputLabel}</Text>
            <TitleInput
              value={inputValue}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={({ currentTarget }: any) => {
                setInputValue(String(currentTarget.value));
              }}
            />

            <FlatList
              data={foodData}
              renderItem={({ item }) => (
                <FoodRow
                  onPress={() => {
                    onClose();
                  }}
                >
                  <FoodName>{item.foodName}</FoodName>
                </FoodRow>
              )}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
          </Content>
        </ModalContainer>
      )}
    </>
  );
};

export default SelectFoodModal;

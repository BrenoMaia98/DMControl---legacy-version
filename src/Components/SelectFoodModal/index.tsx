import React from 'react';

import { FlatList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  ModalContainer,
  TitleText,
  TitleInput,
  InputText,
  FoodName,
  Content,
  FoodRow,
} from './styles';
import { SelectFoodModalProps, mockFoodData } from './types';
import { FoodDTO } from '../../Database';
import Strings from '../../Constants/Texts/Strings';
import { IconEnum } from '../../Utils/PickIcon/types';
import PickIcon from '../../Utils/PickIcon';
import { ColorPalette } from '../../Constants/ColorPalette';

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
    setFoodData((JSON.parse(mockFoodData) as FoodDTO[]) || []);
  }, []);

  React.useEffect(() => {
    setInputValue(selectedFood || '');
  }, [selectedFood]);

  return (
    <>
      {visible && (
        <ModalContainer>
          <Content>
            <View style={{ position: 'absolute', right: 0, top: 0 }}>
              <TouchableOpacity onPress={onClose}>
                {PickIcon({
                  iconType: IconEnum.Close,
                  size: 'lg',
                  colorIcon: ColorPalette.gray,
                })}
              </TouchableOpacity>
            </View>
            <TitleText>{Title}</TitleText>
            <InputText>{InputLabel}</InputText>
            <TitleInput
              value={inputValue}
              onChangeText={(value) => {
                setInputValue(value);
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

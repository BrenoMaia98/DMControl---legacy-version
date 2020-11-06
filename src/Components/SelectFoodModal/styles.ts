import styled from 'styled-components/native';
import { Input } from 'native-base';
import { Dimensions } from 'react-native';
import { ColorPalette } from '../../Constants/ColorPalette';

export const ModalContainer = styled.View`
  height: ${Dimensions.get('screen').height}px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const TitleText = styled.Text`
  font-size: 19px;
  font-weight: 900;
  padding: 4px;
`;
export const InputText = styled.Text`
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  padding: 4px;
`;
export const TitleInput = styled(Input)`
  border: 1px solid ${ColorPalette.gray};
  font-size: 19px;
  padding: 4px;
`;
export const FoodRow = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
  width: 90%;
  padding: 20px;
`;
export const FoodName = styled.Text`
  font-size: 19px;
  color: ${ColorPalette.gray};
  text-align: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;

  border: 1px solid ${ColorPalette.gray};
  background-color: white;
  height: 80%;
  width: 80%;
  padding: 10px;
`;

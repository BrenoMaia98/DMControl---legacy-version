import styled from 'styled-components/native';
import { Input } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const ModalContainer = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const TitleInput = styled(Input)`
  border: 1px solid ${ColorPalette.gray};
  font-size: 1.2em;
  padding: 4px;
`;
export const FoodRow = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${ColorPalette.gray};
  width: 90%;
  padding: 20px;
`;
export const FoodName = styled.Text`
  font-size: 1.2em;
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

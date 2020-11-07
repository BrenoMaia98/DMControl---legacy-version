import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import DefaultButton from '../../DefaultButton';

export const ScreenActionContainer = styled.View<{ hasBoth: boolean }>`
  flex-direction: row;
  justify-content: ${(props) => (props.hasBoth ? 'space-between' : 'center')};
  padding: 8px;
`;

export const ScreenActionButton = styled(DefaultButton)`
  width: ${Dimensions.get('screen').width}px;
  width: 300px;
`;

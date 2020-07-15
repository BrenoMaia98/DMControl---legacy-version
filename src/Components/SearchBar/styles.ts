import styled from 'styled-components/native';
import { Input } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const Container = styled.View`
  flex-direction: row;
`;

export const SearchInput = styled(Input)`
  border: 1px solid ${ColorPalette.gray};
`;

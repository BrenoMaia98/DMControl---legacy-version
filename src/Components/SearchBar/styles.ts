import styled from 'styled-components/native';
import { Input } from 'native-base';
import { ColorPalette } from '../../Constants/ColorPalette';

export const Container = styled.View<{ align?: 'center' | 'right' | 'left' }>`
  flex-direction: row;
  align-self: ${(props) => props.align || undefined};
`;

export const SearchInput = styled(Input)`
  border: 1px solid ${ColorPalette.gray};
`;

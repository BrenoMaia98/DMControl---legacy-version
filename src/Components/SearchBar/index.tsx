import React from 'react';

import { Item, Label } from 'native-base';
import { Container, SearchInput } from './styles';
import IconButton from '../IconButton';
import { IconEnum } from '../../Utils/PickIcon/types';

interface SearchBarProps {
  label: string;
  labelPosition: 'stacked' | 'floating' | 'inlineLabel' | 'fixedLabel';
  align?: 'center' | 'right' | 'left';
  onSearch(value: string): void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  label,
  onSearch,
  labelPosition,
  align,
}) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <Container align={align}>
      <Item
        stackedLabel={labelPosition === 'stacked' || undefined}
        floatingLabel={labelPosition === 'floating' || undefined}
        inlineLabel={labelPosition === 'inlineLabel' || undefined}
        fixedLabel={labelPosition === 'fixedLabel' || undefined}
        last
      >
        <Label>{label}</Label>
        <SearchInput
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={({ currentTarget }: any) => {
            setValue(String(currentTarget.value));
          }}
        />
      </Item>
      <IconButton
        onPress={() => {
          onSearch(value);
        }}
        defaultIcon={IconEnum.Search}
      />
    </Container>
  );
};

export default SearchBar;

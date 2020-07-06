import React from 'react';
import { Text, View } from 'react-native';
import { ContainerTitleBar } from './styles';
import { IconEnum } from '../../Utils/PickIcon/types';
import PickIcon from '../../Utils/PickIcon';

interface TitleBarProps {
  titleIcon: IconEnum;
  header: {
    Title: string;
    Subtitle: string;
    Help: string;
  };
}

const TitleBar: React.FC<TitleBarProps> = ({ titleIcon, header }) => {
  return (
    <ContainerTitleBar>
      <View>
        <View>
          {PickIcon({ iconType: IconEnum.GoBook, size: 'lg' })}
          <Text>{header.Title}</Text>
        </View>
        <Text>{header.Subtitle}</Text>
      </View>
      <View>
        <Text>{header.Help}</Text>
      </View>
    </ContainerTitleBar>
  );
};

export default TitleBar;

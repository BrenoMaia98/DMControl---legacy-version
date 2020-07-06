import React from 'react';
import { Text, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContainerTitleBar, Title, Subtitle, RowAligned } from './styles';
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
        <RowAligned
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {PickIcon({ iconType: titleIcon, size: 'lg' })}
          <Title>{header.Title}</Title>
        </RowAligned>
        <Subtitle>{header.Subtitle}</Subtitle>
      </View>
      <RowAligned>
        <Subtitle>{header.Help}</Subtitle>
        <TouchableOpacity
          onPress={() => Alert.alert('Status', 'Work in progress')}
        >
          {PickIcon({ iconType: IconEnum.MdHelp, size: 'md' })}
        </TouchableOpacity>
      </RowAligned>
    </ContainerTitleBar>
  );
};

export default TitleBar;

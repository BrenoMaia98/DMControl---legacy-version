import React from 'react';
import { Touchable } from './styles';
// import { Container } from './styles';

type IconButtonProps{
  customIcon: JSX.Element,
  defaultIcon:
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  const pickIcon(){

  }

  return <Touchable>{icon}</Touchable>;
};

export default IconButton;

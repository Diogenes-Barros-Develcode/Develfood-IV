import React from 'react';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

import {ButtonIcon, Title} from './styles';
interface Props {
  name: string;
  isPressed: boolean;
  onPressed: Function;
}

export function TabBarButton({name, isPressed, onPressed}: Props) {
  const theme = useTheme();
  return (
    <ButtonIcon onPress={() => onPressed()}>
      <Image
        source={
          name === 'Inicio'
            ? theme.icons.home
            : name === 'Favoritos'
            ? theme.icons.favorite
            : name === 'Historico'
            ? theme.icons.list
            : name === 'Perfil'
            ? theme.icons.user
            : null
        }
        style={{
          tintColor: isPressed ? theme.colors.icon_red : theme.colors.icon_gray,
          height: isPressed ? RFValue(25) : RFValue(20),
          width: isPressed ? RFValue(36) : RFValue(32),
        }}
      />
      {isPressed ? <Title /> : <Title>{name}</Title>}
    </ButtonIcon>
  );
}

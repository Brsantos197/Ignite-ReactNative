import React from 'react';
import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container, Logo } from './styles';

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
}

export const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  );
}

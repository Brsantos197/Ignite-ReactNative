import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, FilterStyleProps, Title } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export const Filter = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <Container 
      isActive={isActive}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
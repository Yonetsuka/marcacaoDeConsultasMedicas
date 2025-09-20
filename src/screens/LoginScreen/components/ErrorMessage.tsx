import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';

type Props = {
  message: string;
};

const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};

export default ErrorMessage;

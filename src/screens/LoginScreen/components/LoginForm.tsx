import React from 'react';
import { Input } from 'react-native-elements';

type Props = {
  email: string;
  password: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
};

const LoginForm: React.FC<Props> = ({ email, password, onEmailChange, onPasswordChange }) => {
  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={onEmailChange}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={{ marginBottom: 15 }}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        containerStyle={{ marginBottom: 15 }}
      />
    </>
  );
};

export default LoginForm;

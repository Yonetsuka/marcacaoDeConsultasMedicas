import React from 'react';
import { Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types/navigation';
import { Container, Title } from './styles';
import LoginForm from './components/LoginForm';
import ErrorMessage from './components/ErrorMessage';
import useLogin from './hooks/useLogin';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const { email, password, setEmail, setPassword, handleLogin, error, loading } = useLogin();

  return (
    <Container>
      <Title>App Marcação de Consultas</Title>

      <LoginForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />

      {error ? <ErrorMessage message={error} /> : null}

      <Button
        title="Entrar"
        onPress={handleLogin}
        loading={loading}
        containerStyle={{ marginTop: 10, width: '100%' }}
        buttonStyle={{ backgroundColor: '#007BFF', paddingVertical: 12 }}
      />

      <Button
        title="Cadastrar Novo Paciente"
        onPress={() => navigation.navigate('Register')}
        containerStyle={{ marginTop: 10, width: '100%' }}
        buttonStyle={{ backgroundColor: '#6C757D', paddingVertical: 12 }}
      />

      <Text style={{ marginTop: 20, textAlign: 'center', color: '#333' }}>
        Use as credenciais de exemplo:
      </Text>
      <Text style={{ marginTop: 10, textAlign: 'center', color: '#333', fontSize: 12 }}>
        Admin: admin@example.com / 123456{'\n'}
        Médicos: joao@example.com, maria@example.com, pedro@example.com / 123456
      </Text>
    </Container>
  );
};

export default LoginScreen;

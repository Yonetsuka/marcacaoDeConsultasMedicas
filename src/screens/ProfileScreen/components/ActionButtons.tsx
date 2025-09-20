import React from 'react';
import { Button } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import theme from '../../../styles/theme';

type Props = {
  navigation: any;
  signOut: () => void;
};

const ActionButtons: React.FC<Props> = ({ navigation, signOut }) => {
  return (
    <>
      <Button
        title="Editar Perfil"
        onPress={() => navigation.navigate('EditProfile')}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.editButton}
      />

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Sair"
        onPress={signOut}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.logoutButton}
      />
    </>
  );
};

const styles = {
  button: {
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  editButton: {
    backgroundColor: theme.colors.success,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
};

export default ActionButtons;

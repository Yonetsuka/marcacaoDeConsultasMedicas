import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types/navigation';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import { Container, Title } from './styles';
import ProfileCard from './components/ProfileCard';
import ActionButtons from './components/ActionButtons';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<ProfileScreenProps['navigation']>();

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Title>Meu Perfil</Title>

        <ProfileCard user={user} />

        <ActionButtons navigation={navigation} signOut={signOut} />
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

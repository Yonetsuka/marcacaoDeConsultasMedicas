import React from 'react';
import styled from 'styled-components/native';
import { User } from '../models/UserModel';
import RoleBadge from './RoleBadge';
import theme from '../../../styles/theme';

type Props = {
  user: User | null;
};

const ProfileCard: React.FC<Props> = ({ user }) => {
  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'doctor':
        return 'Médico';
      case 'patient':
        return 'Paciente';
      default:
        return role;
    }
  };

  return (
    <Card>
      <Avatar source={{ uri: user?.image || 'https://via.placeholder.com/150' }} />
      <Name>{user?.name}</Name>
      <Email>{user?.email}</Email>
      <RoleBadge role={user?.role || ''} label={getRoleText(user?.role || '')} />

      {user?.role === 'doctor' && (
        <SpecialtyText>Especialidade: {user?.specialty}</SpecialtyText>
      )}
    </Card>
  );
};

const Card = styled.View`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 16px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const Email = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const SpecialtyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-top: 8px;
`;

export default ProfileCard;

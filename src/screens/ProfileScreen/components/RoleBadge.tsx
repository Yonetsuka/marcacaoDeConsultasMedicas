import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';

type Props = {
  role: string;
  label: string;
};

const RoleBadge: React.FC<Props> = ({ role, label }) => {
  return (
    <Badge role={role}>
      <RoleText>{label}</RoleText>
    </Badge>
  );
};

const Badge = styled.View<{ role: string }>`
  background-color: ${({ role }) => {
    switch (role) {
      case 'admin':
        return theme.colors.primary + '20';
      case 'doctor':
        return theme.colors.success + '20';
      default:
        return theme.colors.secondary + '20';
    }
  }};
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

export default RoleBadge;

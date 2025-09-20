import { useAuth } from '../../../contexts/AuthContext';

const useProfile = () => {
  const { user, signOut } = useAuth();
  return { user, signOut };
};

export default useProfile;

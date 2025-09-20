export type User = {
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient' | string;
  specialty?: string;
  image?: string;
};

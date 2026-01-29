import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  phone: string;
  role: 'intern' | 'admin';
  college?: string;
  internshipStart?: string;
  internshipEnd?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, phoneNumber, setPhoneNumber, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

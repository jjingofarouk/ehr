import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  // Add more user fields if needed (e.g., name, role, etc.)
}

interface AuthContextType {
  user: User | null; // user can be null when not logged in
  login: (email: string) => void; // Removed 'password' from parameters
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    // Add login logic (password is no longer needed for now)
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { signin } from '../../apis/auth';

function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  async function login(credentials) {
    const newUser = await signin(credentials);
    setUser(newUser);
  }

  // async function logout() {}

  console.log(initialUser);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

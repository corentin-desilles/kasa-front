import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../context';

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

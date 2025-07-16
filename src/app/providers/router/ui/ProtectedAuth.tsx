import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ProtectedAuthProps {
  children: JSX.Element;
}

export const ProtectedAuth = ({ children }: ProtectedAuthProps) => {
  const user = useSelector(getUserAuthData);
  const location = useLocation();

  if (!user) {
    return <Navigate to={RoutePath.MAIN} state={{ from: location }} replace />;
  }

  return children;
};

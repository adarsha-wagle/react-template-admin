import { useSelector } from 'react-redux';
import { selectCurrentToken } from 'src/redux/actions/auth_slice.ts';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface DecodedToken extends JwtPayload {
  UserInfo?: {
    username: string;
    roles: string[];
  };
}

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = 'Employee';

  if (token) {
    const decoded = jwtDecode(token) as DecodedToken;

    if (decoded.UserInfo) {
      const { username, roles } = decoded.UserInfo;

      isManager = roles.includes('Manager');
      isAdmin = roles.includes('Admin');

      if (isManager) status = 'Manager';
      if (isAdmin) status = 'Admin';
      return { username, roles, status, isManager, isAdmin };
    }
  }

  return { username: '', roles: [], isManager, isAdmin, status };
};

export default useAuth;

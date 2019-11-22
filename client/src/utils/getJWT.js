import Cookies from 'js-cookie';

export const getJWT = () => {
  const jwt = Cookies.get('token');
  return jwt;
};

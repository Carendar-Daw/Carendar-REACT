import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { error } from '@Commons/components/presentational/MessagesApp/Messages';
import axios from '@Commons/http';
import { saveSalon, savePhotoSaloon } from '../store/user/actions';

const useAuth = () => {
  const [verified, setVerified] = useState(true);
  const [ready, setReady] = useState(false);
  const { user, getIdTokenClaims, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  useEffect(async () => {
    if (isAuthenticated) setVerified(user.email_verified);
    if (isAuthenticated && user.email_verified) {
      const { nickname, email, sub } = user;
      const saloon = {
        sal_name: nickname,
        sal_email: email,
        auth0_id: sub,
      };
      const idToken = await getIdTokenClaims();
      axios.defaults.headers.common.Authorization = `Bearer ${idToken.__raw}`;
      try {
        const newSaloon = await axios.post('saloon', saloon);
        dispatch(saveSalon(newSaloon.data.saloon));
        dispatch(savePhotoSaloon(user.picture));
        setReady(true);
      } catch (errors) {
        error('Error en la app');
      }
    }
  }, [isAuthenticated]);

  return [ready, verified];
};

export default useAuth;

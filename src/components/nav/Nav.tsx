import Stack from '@mui/material/Stack'
import { Icon } from '@iconify/react';
import Typography from '@mui/material/Typography'
import { PATH_AUTH } from '@/src/config/path/path';
import { useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";
import auth from '@/src/config/auth/firebaseApp';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar'
import { AppDispatch } from '@/src/store/store';
import { logout } from '@/src/config/auth/reducerAuthContext';
import { Box, Chip } from '@mui/material';
import AccountMenu from './AccountMenu';



function NavHeader() {
  const { push } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: any) => state.auth);
  const user = authState?.user;
  const handleLogin = () => {
    push('/' + PATH_AUTH.login)
  }
  return (
    <Stack flexDirection={'row'} alignItems={'center'} sx={{ cursor: 'pointer' }}
    >
      {
        authState.isAuthenciated ? (
          <AccountMenu />
        ) : (
          <Stack flexDirection={'row'} alignItems={'center'} onClick={handleLogin}>
            <Typography variant="subtitle1" paddingLeft={0.5} >Login</Typography>
            <Icon icon={'material-symbols:login'} fontSize={20}></Icon>
          </Stack>
        )
      }





    </Stack>
  );
}

export default NavHeader;
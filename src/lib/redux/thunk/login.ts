import { createAsyncThunk } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { ILogin } from 'app/types';

export const loginAsync = createAsyncThunk('user/login', async (data: ILogin) => {
  const { email, password } = data;
  const userCredential = await auth().signInWithEmailAndPassword(email, password);
  const { email: userEmail, uid } = userCredential.user;
  return { userEmail, uid };
});

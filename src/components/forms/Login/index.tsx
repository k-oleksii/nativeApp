import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { EnumColors, ILogin } from 'app/types';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from 'app/lib/redux/thunk';
import { RootState } from 'app/lib/redux/init/store.ts';

export const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userSlice);

  const { control, handleSubmit } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data: ILogin) => {
    // @ts-ignore
    dispatch(loginAsync(data));
  };

  return (
    <View style={styles.login}>
      <Text>User email: {user?.userEmail}</Text>
      <Controller
        defaultValue=""
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.field} placeholder="email" onChangeText={value => onChange(value)} value={value} />
        )}
      />
      <Controller
        defaultValue=""
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry
            style={styles.field}
            placeholder="password"
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
      />
      <Pressable style={styles.submit} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20,
  },
  field: {
    backgroundColor: '#F5F6FA',
    height: 40,
    borderRadius: 8,
  },
  submit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: EnumColors.blue,
    borderRadius: 8,
  },
  submitText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: EnumColors.white,
  },
});

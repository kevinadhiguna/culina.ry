import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from '../components/Loading';

export function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <AuthContainer>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title={'Do not have an account? Create One!'}
        onPress={() => navigation.navigate('Registration')}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});

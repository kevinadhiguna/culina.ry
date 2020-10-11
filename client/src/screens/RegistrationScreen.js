import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {IconButton} from '../components/IconButton';
import {Loading} from '../components/Loading';

import {AuthContext} from '../contexts/AuthContext';

export function RegistrationScreen({navigation}) {
  const {register} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <AuthContainer>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        // 'navigation.pop()' will navigate to previous screen
        onPress={() => navigation.pop()}
      />
      <Heading style={styles.title}>REGISTRATION</Heading>
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
        title={'Register for FREE'}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await register(email, password);
            navigation.pop();
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        }}
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
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});

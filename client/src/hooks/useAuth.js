import React, {useReducer, useMemo, useEffect} from 'react';
import Axios from 'axios';
import SecureStorage from 'react-native-secure-storage';

import {BASE_URL} from '../config';
import {createAction} from '../utils/createAction';
import {sleep} from '../utils/sleep';

export function useAuth() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );

  const auth = useMemo(
    () => ({
      login: async (email, password) => {
        const {data} = await Axios.post(`${BASE_URL}/auth/local`, {
          identifier: email,
          password,
        });
        const user = {
          email: data.user.email,
          token: data.jwt,
        };
        await SecureStorage.setItem('user', JSON.stringify(user));
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await SecureStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email, password) => {
        await sleep(2000);
        await Axios.post(`${BASE_URL}/auth/local/register`, {
          username: email,
          email,
          password,
        });
      },
    }),
    [],
  );

  useEffect(() => {
    sleep(2000).then(() => {
      SecureStorage.getItem('user').then((user) => {
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    });
  }, []);

  return {auth, state};
}

import React, {useContext, useState, useEffect} from 'react';
import Axios from 'axios';

import {UserContext} from '../contexts/UserContext';
import {BASE_URL} from '../config';

export function useGet(endpoint, initialValue = []) {
  const {token} = useContext(UserContext);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    Axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(({data}) => {
      setData(data);
    });
  }, [token, endpoint]);

  return data;
}

import React, {useContext, useLayoutEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {HeaderIconButton} from '../components/HeaderIconButton';
import {Product} from '../components/Product';
import {HeaderIconsContainer} from '../components/HeaderIconsContainer';

import {useGet} from '../hooks/useGet';

import {AuthContext} from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';

export function ProductsListScreen({navigation}) {
  const {logout} = useContext(AuthContext);
  const switchTheme = useContext(ThemeContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconsContainer>
          <HeaderIconButton
            name={'color-palette'}
            onPress={() => {
              switchTheme();
            }}
          />
          <HeaderIconButton
            name={'log-out'}
            onPress={() => {
              logout();
            }}
          />
        </HeaderIconsContainer>
      ),
    });
  }, [navigation, logout, switchTheme]);

  const products = useGet('/products');

  function renderProduct({item: product}) {
    return <Product product={product} />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={renderProduct}
      keyExtractor={(product) => `${product.id}`}
    />
  );
}

const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

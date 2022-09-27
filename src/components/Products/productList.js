import React from 'react'
import Grid from '@mui/material/Grid';
import ProductItem from './Product/productItem';
import PropTypes from 'prop-types';
import '../Products/productList.scss';


export default function productList({ product, onAddToCart }) {
  return (
    <main>
      <div className='product'>
        <div className='product__container'>
          <h5 className='product__title'>SHOP</h5>
        </div>

      </div>
      <Grid container justify='center' spacicing={4}>
        {product.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product}key={product.id} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}
productList.propTypes = {
  product: PropTypes.array,
};

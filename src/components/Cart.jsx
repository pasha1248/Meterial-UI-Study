/** @format */

import { Grid } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import Input from './Input'
import { Store } from './Store'

const Cart = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>
        <Input />
      </div>

      <Grid container spacing={4}>
        {Store.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  )
}

export default Cart

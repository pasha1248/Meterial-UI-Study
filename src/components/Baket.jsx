/** @format */

import { ShoppingBasket } from '@mui/icons-material'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import BasketItem from './BasketItem'

const Baket = props => {
  const { order, removeFromOrder, cartOpen, closeCart } = props
  return (
    <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
      <List sx={{ width: '300px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary='Basket' />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Basket is clear</ListItem>
        ) : (
          <>
            {order.map(el => (
              <BasketItem
                removeFromOrder={removeFromOrder}
                key={el.id}
                {...el}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Total price:{' '}
                {order.reduce((sum, item) => {
                  return sum + item.price
                }, 0)}
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  )
}

export default Baket

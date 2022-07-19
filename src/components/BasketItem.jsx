/** @format */

import { Close } from '@mui/icons-material'
import { IconButton, ListItem, Typography } from '@mui/material'
import React from 'react'

const BasketItem = ({ id, removeFromOrder, price }) => {
  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant='body1'>
        <span>{id}</span>
      </Typography>
      <span>{price}$</span>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  )
}

export default BasketItem

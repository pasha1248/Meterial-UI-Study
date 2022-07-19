/** @format */

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { Context } from '../App'

const CartItem = ({ item }) => {
  const { order, setOrder, isItemAdded, setSnackOpen } =
    React.useContext(Context)

  const addCartBasket = item => {
    setOrder([...order, item])
    console.log(order)
    setSnackOpen(true)
  }
  debugger
  return (
    <Grid item xs='12' md='4'>
      <Card>
        <CardMedia
          component='img'
          sx={{ height: 200 }}
          image={item.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography>{item.price} $</Typography>
        </CardContent>
        <CardActions>
          {isItemAdded(item.id) ? (
            <Button
              disabled
              variant='outlined'
              onClick={() => addCartBasket(item)}
            >
              Bay
            </Button>
          ) : (
            <Button variant='outlined' onClick={() => addCartBasket(item)}>
              Bay
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CartItem

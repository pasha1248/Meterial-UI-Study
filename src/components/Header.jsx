/** @format */

import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'

const Header = ({ cartOpen, orderLen }) => {
  return (
    <AppBar color='primary'>
      <Toolbar>
        <Typography variant='h5' component='span' sx={{ flexGrow: 1 }}>
          Mat UI Test
        </Typography>
        <IconButton color='inherit'>
          <Badge color='secondary' badgeContent={orderLen}>
            <ShoppingBasket onClick={cartOpen} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header

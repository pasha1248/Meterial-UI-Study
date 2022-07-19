/** @format */

import { TextField } from '@mui/material'
import React from 'react'

const Input = () => {
  return (
    <TextField
      fullWidth={true}
      variant='outlined'
      label='search'
      type='search'
      sx={{ m: '20px 0 20px 0' }}
    ></TextField>
  )
}

export default Input

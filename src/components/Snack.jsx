/** @format */

import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Snack = ({ isOpen, handleClose }) => {
  return (
    <Snackbar autoHideDuration={1000} open={isOpen} onClose={handleClose}>
      <Alert sx={{ width: '200%' }} severity='success'>
        Product added !
      </Alert>
    </Snackbar>
  )
}

export default Snack

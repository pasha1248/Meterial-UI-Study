/** @format */
import React, { createContext } from 'react'
import { Container } from '@mui/system'
import Baket from './components/Baket'
import Cart from './components/Cart'
import Header from './components/Header'
import Snack from './components/Snack'

export const Context = createContext(null)

function App() {
  const [order, setOrder] = React.useState([])

  const [cartOpen, setCartOpen] = React.useState(false)

  const [snackOpen, setSnackOpen] = React.useState(false)

  const removeFromOrder = id => {
    setOrder(order.filter(el => el.id !== id))
  }
  const isItemAdded = id => {
    return order.some(el => el.id === id)
  }

  return (
    <Context.Provider value={{ order, setOrder, isItemAdded, setSnackOpen }}>
      <div className='App'>
        <Header cartOpen={() => setCartOpen(true)} orderLen={order.length} />
        <Container>
          <Snack isOpen={snackOpen} handleClose={() => setSnackOpen(false)} />

          <Cart />
        </Container>
        <Baket
          cartOpen={cartOpen}
          closeCart={() => setCartOpen(false)}
          order={order}
          removeFromOrder={removeFromOrder}
        />
      </div>
    </Context.Provider>
  )
}

export default App

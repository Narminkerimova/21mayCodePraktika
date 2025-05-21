import React from 'react'
import RequestProvider from './RequestProvider'
import BasketProvider from "./BasketProvider"
import WishListProvider from "./WishListProvider"

function MainProvider({children}) {
  return (
  <BasketProvider>
    <WishListProvider>
      <RequestProvider>
        {children}
      </RequestProvider>
    </WishListProvider>
  </BasketProvider>
  )
}

export default MainProvider

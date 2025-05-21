import { createContext } from "react"

export const WishListContext=createContext()
function WishList({children}) {
  return (
    <WishListContext.Provider>
      {children}
    </WishListContext.Provider>
  )
}

export default WishList

import { ReactNode, createContext, useState } from 'react'

export const CartContext = createContext('')

type ItemList = {
  coffee: {
    id: string
    title: string
    description: string
    image: string
    price: number
    tags: string[]
  }
}

export const CartContextProvider = ({ children }) => {
  const [itemList, setItemList] = useState<ItemList[]>([])

  const addItemToList = (newItem: ItemList) => {
    if (!itemList.includes(newItem)) {
      setItemList((old) => [...old, newItem])
    }
  }

  const removeItemToList = (itemToRemove) => {
    setItemList((old) => old.filter((item) => item !== itemToRemove))
  }

  return (
    <CartContext.Provider value={{ itemList, addItemToList, removeItemToList }}>
      {children}
    </CartContext.Provider>
  )
}

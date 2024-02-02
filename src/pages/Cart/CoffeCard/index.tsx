import { Trash } from '@phosphor-icons/react'
import { Container, RemoveButton } from './styles'
import { InputCount } from '../../../components/InputCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'

export type ItemProps = {
  item: {
    image: string
    title: string
    price: number
    qtd: number
  }
}

export function CoffeCard({ item }: ItemProps) {
  const [amount, setAmount] = useState(item.qtd)
  const { removeItemToList } = useContext(CartContext)
  const { image, title, price } = item

  return (
    <Container>
      <div>
        <img src={image} alt={title} />
        <RemoveButton>
          <h3>{title}</h3>
          <div>
            <InputCount amount={amount} setAmount={setAmount} />
            <button onClick={() => removeItemToList(item)}>
              <Trash size={16} style={{ color: '#8047F8' }} />
              Remove
            </button>
          </div>
        </RemoveButton>
      </div>
      <h4>R$ {price.toFixed(2)}</h4>
    </Container>
  )
}

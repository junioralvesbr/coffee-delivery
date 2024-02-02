import { ShoppingCart } from '@phosphor-icons/react'
import { Container, InfoPrice } from './styles'
import { InputCount } from '../../../components/InputCount'
import { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../../context/CartContext'

type CardProps = {
  coffee: {
    id: string
    title: string
    description: string
    image: string
    price: number
    tags: string[]
  }
}

export function Card({ coffee }: CardProps) {
  const { addItemToList } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  useEffect(() => {
    if (coffee.qtd) {
      setAmount(coffee.qtd)
    }
  }, [coffee.qtd])

  const handleAddItemToList = () => {
    coffee.qtd = amount
    addItemToList(coffee)

    console.log(coffee)
  }

  return (
    <Container>
      <dl>
        <img src={coffee.image} alt={coffee.title} />
        <span>Tradicional</span>
        <dt>{coffee.title}</dt>
        <dd>{coffee.description}</dd>

        <InfoPrice>
          <span>
            R$ <strong>{coffee.price.toFixed(2)}</strong>
          </span>

          <div>
            <InputCount amount={amount} setAmount={setAmount} />

            <button onClick={() => handleAddItemToList()}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </InfoPrice>
      </dl>
    </Container>
  )
}

import { ShoppingCart } from '@phosphor-icons/react'
import { Container, InfoPrice, InputCount } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
  const [amount, setAmount] = useState(0)

  function decrementAmount() {
    if (amount > 0) {
      setAmount((old) => old - 1)
    }
  }

  function incrementAmount() {
    setAmount((old) => old + 1)
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
            <InputCount>
              <button onClick={decrementAmount}>
                <img src="/icon-minus.svg" alt="icone de menos" />
              </button>
              <span>{amount}</span>
              <button onClick={incrementAmount}>
                <img src="/icon-plus.svg" alt="icone de mais" />
              </button>
            </InputCount>

            <Link to="/cart">
              <ShoppingCart size={22} weight="fill" />
            </Link>
          </div>
        </InfoPrice>
      </dl>
    </Container>
  )
}

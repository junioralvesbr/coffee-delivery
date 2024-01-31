import { ShoppingCart } from '@phosphor-icons/react'
import { Container, InfoPrice } from './styles'
import { Link } from 'react-router-dom'
import { InputCount } from '../InputCount'

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
            <InputCount />

            <Link to="/cart">
              <ShoppingCart size={22} weight="fill" />
            </Link>
          </div>
        </InfoPrice>
      </dl>
    </Container>
  )
}

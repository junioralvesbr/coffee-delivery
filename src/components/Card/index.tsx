import { ShoppingCart } from '@phosphor-icons/react'
import { Container, InfoPrice, InputCount } from './styles'
import { Link } from 'react-router-dom'

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

const formatPriceToBRL = Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
})

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
            R$ <strong>{formatPriceToBRL.format(coffee.price)}</strong>
          </span>

          <div>
            <InputCount>
              <button>
                <img src="/icon-minus.svg" alt="icone de menos" />
              </button>
              <input type="text" placeholder="0" />
              <button>
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

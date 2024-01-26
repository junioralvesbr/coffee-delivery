import { ShoppingCart } from '@phosphor-icons/react'
import { Container, InfoPrice, InputCount } from './styles'
import { Link } from 'react-router-dom'

export function Card() {
  return (
    <Container>
      <dl>
        <img src="/coffees/americano.png" alt="foto café americano" />
        <span>Tradicional</span>
        <dt>Expresso Tradicional</dt>
        <dd>O tradicional café feito com água quente e grãos moídos</dd>

        <InfoPrice>
          <span>
            R$ <strong>9,90</strong>
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

import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Header, Content, InfoGrid, Card, PriceLabel } from './styles'
import { Link } from 'react-router-dom'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <Header>
        <Content>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <InfoGrid>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </InfoGrid>
          </div>

          <picture>
            <img src="/hero.png" alt="Imagem do Hero" />
          </picture>
        </Content>
      </Header>

      <main>
        <h2>Nossos cafés</h2>

        <Card>
          <dl>
            <img src="/coffees/americano.png" alt="foto café americano" />
            <span>Tradicional</span>
            <dt>Expresso Tradicional</dt>
            <dd>O tradicional café feito com água quente e grãos moídos</dd>

            <PriceLabel>
              <span>
                R$ <strong>9,90</strong>
              </span>

              <Link to="/cart">
                <ShoppingCart size={22} weight="fill" />
              </Link>
            </PriceLabel>
          </dl>
        </Card>
      </main>
    </>
  )
}

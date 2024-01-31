import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Card } from './Card'
import { CardGrid, Header, InfoGrid, Main } from './styles'

import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <>
      <Header>
        <div>
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
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
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
        </div>
      </Header>

      <Main>
        <h2>Nossos cafés</h2>

        <CardGrid>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CardGrid>
      </Main>
    </>
  )
}

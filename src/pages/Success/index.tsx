import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { BoardInfo, Container, GradientBoard } from './styles'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <section>
        <GradientBoard>
          <div>
            <BoardInfo>
              <MapPin
                size={38}
                weight="fill"
                style={{ backgroundColor: theme.colors.purple }}
              />
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </span>
            </BoardInfo>

            <BoardInfo>
              <Clock
                size={38}
                weight="fill"
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </BoardInfo>

            <BoardInfo>
              <CurrencyDollar
                size={38}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              <span>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </span>
            </BoardInfo>
          </div>
        </GradientBoard>

        <picture>
          <img src="/delivery.svg" alt="foto de moto" />
        </picture>
      </section>
    </Container>
  )
}

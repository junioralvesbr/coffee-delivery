import { InputCount } from '../../components/InputCount'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  CoffeCard,
  ConfirmButton,
  Container,
  DescriptionSection,
  InputForm,
  InputSection,
  Order,
  RadioForm,
} from './styles'

export function Cart() {
  return (
    <Container>
      <main>
        <h2>Complete seu pedido</h2>

        <section>
          <DescriptionSection>
            <MapPinLine size={22} style={{ color: '#c47f17' }} />
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </DescriptionSection>

          <InputForm>
            <input type="text" placeholder="CEP" className="cep" />
            <div className="empty"></div>
            <input type="text" placeholder="Rua" className="rua" />
            <input type="text" placeholder="Número" className="number" />
            <div className="complement">
              <input type="text" placeholder="Complemento" id="complement" />
              <label htmlFor="complement">Opicional</label>
            </div>
            <input type="text" placeholder="Bairro" className="bairro" />
            <input type="text" placeholder="Cidade" className="cidade" />
            <input type="text" placeholder="UF" className="uf" />
          </InputForm>
        </section>

        <section>
          <DescriptionSection>
            <CurrencyDollar size={22} style={{ color: '#8047f8' }} />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </DescriptionSection>

          <RadioForm>
            <input type="radio" id="cred-card2" name="payment" />
            <label htmlFor="cred-card2">
              <CreditCard size={16} style={{ color: '#8047F8' }} />
              Cartão de crédito
            </label>

            <input type="radio" id="debit-card" name="payment" />
            <label htmlFor="debit-card">
              <Bank size={16} style={{ color: '#8047F8' }} />
              <span>Cartão de débito</span>
            </label>

            <input type="radio" id="money" name="payment" />
            <label htmlFor="money">
              <Money size={16} style={{ color: '#8047F8' }} />
              <span>Dinheiro</span>
            </label>
          </RadioForm>
        </section>
      </main>

      <aside>
        <h2>Cafés selecionados</h2>

        <section>
          <CoffeCard>
            <div>
              <img src="/coffees/americano.png" alt="americano" />
              <InputSection>
                <h3>Expresso Tradicional</h3>
                <div>
                  <InputCount />
                  <button>
                    <Trash size={16} style={{ color: '#8047F8' }} />
                    Remove
                  </button>
                </div>
              </InputSection>
            </div>
            <h4>R$ 9,90</h4>
          </CoffeCard>

          <CoffeCard>
            <div>
              <img src="/coffees/americano.png" alt="americano" />
              <InputSection>
                <h3>Expresso Tradicional</h3>
                <div>
                  <InputCount />
                  <button>
                    <Trash size={16} style={{ color: '#8047F8' }} />
                    Remove
                  </button>
                </div>
              </InputSection>
            </div>
            <h4>R$ 9,90</h4>
          </CoffeCard>

          <Order>
            <div>
              <span>Total de itens</span>
              <em>R$ 29,70</em>
            </div>

            <div>
              <span>Entrega</span>
              <em>R$ 3,50</em>
            </div>

            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </Order>

          <ConfirmButton>Confirmar pedido</ConfirmButton>
        </section>
      </aside>
    </Container>
  )
}

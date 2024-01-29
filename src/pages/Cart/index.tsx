import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  Container,
  DescriptionSection,
  InputForm,
  MainSection,
  RadioForm,
} from './styles'

export function Cart() {
  return (
    <Container>
      <main>
        <h2>Complete seu pedido</h2>

        <MainSection>
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
        </MainSection>

        <MainSection>
          <DescriptionSection>
            <CurrencyDollar size={22} style={{ color: '#8047f8' }} />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </DescriptionSection>

          <RadioForm>
            <label htmlFor="cred-card">
              <CreditCard size={16} style={{ color: '#8047F8' }} />
              Cartão de crédito
              <input type="radio" id="cred-card" name="payment" />
            </label>

            <label htmlFor="debit-card">
              <Bank size={16} style={{ color: '#8047F8' }} />
              Cartão de débito
              <input type="radio" id="debit-card" name="payment" />
            </label>

            <label htmlFor="money">
              <Money size={16} style={{ color: '#8047F8' }} />
              Dinheiro
              <input type="radio" id="money" name="payment" />
            </label>
          </RadioForm>
        </MainSection>
      </main>

      <aside>
        <h2>Cafés selecionados</h2>
      </aside>
    </Container>
  )
}

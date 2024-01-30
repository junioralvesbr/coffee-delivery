import { useState } from 'react'
import { Container } from './styles'

export function InputCount() {
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
      <button onClick={decrementAmount}>
        <img src="/icon-minus.svg" alt="icone de menos" />
      </button>
      <span>{amount}</span>
      <button onClick={incrementAmount}>
        <img src="/icon-plus.svg" alt="icone de mais" />
      </button>
    </Container>
  )
}

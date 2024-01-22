import { MapPin } from '@phosphor-icons/react'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="logo do coffee delivery" />

      <aside>
        <div>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Maringá, PR</span>
        </div>
      </aside>
    </Container>
  )
}

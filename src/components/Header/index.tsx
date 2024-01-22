import { MapPin } from '@phosphor-icons/react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="logo do coffee delivery" />
      </Link>

      <aside>
        <div>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Maringá, PR</span>
        </div>
      </aside>
    </Container>
  )
}

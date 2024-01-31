import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Header = styled.header`
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 90px;

  & > div {
    display: flex;
    flex: 1;
    align-items: center;
    max-width: 1280px;
    margin-inline: auto;
    padding-top: 5.875rem;

    h1 {
      ${mixins.fonts.titleXL};
      color: ${(props) => props.theme.colors['base-title']};
      text-wrap: balance;
    }

    p {
      ${mixins.fonts.textL}
      color: ${(props) => props.theme.colors['base-subtitle']};
      max-width: 80%;
      margin-top: 1rem;
    }
  }
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  margin-top: 4.375rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.colors.background};
      padding: 8px;
      border-radius: 100%;
    }

    span {
      ${mixins.fonts.textM}
      flex: 1 0 0;
    }
  }
`

export const Main = styled.main`
  max-width: 1280px;
  margin-inline: auto;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
`

export const CardGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
`

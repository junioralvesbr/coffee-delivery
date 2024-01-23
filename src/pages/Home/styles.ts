import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Header = styled.header`
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
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
      padding: 8px;
      border-radius: 100%;
    }

    span {
      ${mixins.fonts.textM}
      flex: 1 0 0;
    }
  }
`

export const Card = styled.div`
  & > dl {
    background-color: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 256px;

    & > span {
      ${mixins.fonts.tag}
      text-transform: uppercase;
      color: ${(props) => props.theme.colors['yellow-dark']};
      background-color: ${(props) => props.theme.colors['yellow-light']};
      padding: 0.5rem;
      border-radius: 100px;
    }

    & > dt {
      ${mixins.fonts.titleS}
      text-transform: capitalize;
      color: ${(props) => props.theme.colors['base-title']};
    }

    & > dd {
      ${mixins.fonts.textS}
      text-align: center;
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const PriceLabel = styled.div`
  display: flex;
  align-items: center;

  span {
    ${mixins.fonts.textS}

    strong {
      ${mixins.fonts.titleM}
    }
  }

  a {
    background-color: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors.white};
    padding: 0.5rem;
    border-radius: 8px;
  }
`

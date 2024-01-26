import styled from 'styled-components'

import { mixins } from '../../styles/mixins'
import { ShoppingCart } from '@phosphor-icons/react'

export const Container = styled.div`
  & > dl {
    & > span {
      ${mixins.fonts.tag}
      color: ${(props) => props.theme.colors['yellow-dark']};
      background-color: ${(props) => props.theme.colors['yellow-light']};
      text-transform: uppercase;
      padding: 4px 8px;
      border-radius: 100px;
    }

    dt {
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    dd {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const InfoPrice = styled.div`
  display: flex;
  & > span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};

    > strong {
      ${mixins.fonts.titleM}
    }
  }

  > a {
    background-color: ${(props) => props.theme.colors['purple-dark']};
    color: ${(props) => props.theme.colors.white};
    padding: 8px;
    border-radius: 6px;
  }
`

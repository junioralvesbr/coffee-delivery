import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  max-width: 256px;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding-inline: 20px;

  & > dl {
    text-align: center;
    transform: translateY(-8%);

    img {
      margin-inline: auto;
    }

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
      margin-top: 20px;
    }

    dd {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors['base-label']};
      margin-top: 8px;
    }
  }
`

export const InfoPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  & > span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};

    > strong {
      ${mixins.fonts.titleM}
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > button {
      background-color: ${(props) => props.theme.colors['purple-dark']};
      color: ${(props) => props.theme.colors.white};
      padding: 8px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`

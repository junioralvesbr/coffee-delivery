import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e5e5;
  padding-block: 20px;

  > div {
    display: flex;
    gap: 20px;
    height: 64px;
  }

  h4 {
    ${mixins.fonts.textM}
    font-weight: 700;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const RemoveButton = styled.div`
  div {
    display: flex;
    gap: 8px;

    > button {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 4px;
      ${mixins.fonts.buttonM}
      text-transform: uppercase;
      border: 1px solid transparent;
      color: ${(props) => props.theme.colors['base-text']};
      background-color: ${(props) => props.theme.colors['base-button']};
      border-radius: 6px;
      padding-inline: 8px;
      cursor: pointer;
    }
  }
`

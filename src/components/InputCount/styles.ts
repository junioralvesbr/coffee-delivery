import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;

    :hover {
      filter: opacity(0.5);
    }
  }

  & > span {
    ${mixins.fonts.textM}
    max-width: 16px;
    border: none;
    color: ${(props) => props.theme.colors['base-title']};
    background-color: transparent;
    padding-block: 8px;
  }
`

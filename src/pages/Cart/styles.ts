import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  max-width: 1280px;
  margin-inline: auto;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']}
  }
`

export const MainSection = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const DescriptionSection = styled.div`
  ${mixins.fonts.textS}
  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  column-gap: 0.5rem;

  span {
    ${mixins.fonts.textM}
  }

  p {
    grid-column-start: 2;
  }
`

export const InputForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 60px;
  grid-template-rows: auto;
  gap: 16px 12px;
  grid-template-areas:
    'cep empty empty empty'
    'rua rua rua rua'
    'number complement complement complement'
    'bairro cidade cidade uf';
  margin-top: 2rem;

  input {
    ${mixins.fonts.textS}
    background-color: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    border-radius: 4px;
    padding: 0.75rem;
  }

  input.cep {
    grid-area: cep;
  }

  div.empty {
    grid-area: empty;
  }

  input.rua {
    grid-area: rua;
  }

  input.number {
    grid-area: number;
  }

  div.complement {
    grid-area: complement;
    display: flex;
    align-items: center;

    input {
      flex-grow: 1;
      border-right: none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    label {
      ${mixins.fonts.textS}
      font-style: italic;
      background-color: ${(props) => props.theme.colors['base-input']};
      border: 1px solid ${(props) => props.theme.colors['base-button']};
      border-left: none;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 0.75rem;
      cursor: text;
    }
  }

  input.bairro {
    grid-area: bairro;
  }

  input.cidade {
    grid-area: cidade;
  }

  input.uf {
    grid-area: uf;
  }
`

export const RadioForm = styled.form`
  label {
    display: inline-block;
    padding: 1rem;
    ${mixins.fonts.buttonM}
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['base-text']};
    background-color: ${(props) => props.theme.colors['base-button']};
  }
`

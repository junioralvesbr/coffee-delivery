import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    background-color: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};
    border-radius: 8px;
  }

  & > a {
    color: ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};
    padding: 0.5rem;
    border-radius: 8px;
  }
`

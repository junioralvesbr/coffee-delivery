import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  max-width: 1280px;
  margin-inline: auto;
  padding-top: 112px;

  h1 {
    ${mixins.fonts.titleL}
    font-weight: 800;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  h2 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  }
`

export const GradientBoard = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  min-width: 640px;
  background: linear-gradient(
    90deg,
    rgba(219, 172, 44, 1) 0%,
    rgba(128, 71, 248, 1) 100%
  );

  > div {
    background-color: white;
    border-radius: 6px 36px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const BoardInfo = styled.div`
  display: flex;
  gap: 12px;

  svg {
    padding: 8px;
    border-radius: 100%;
    color: ${(props) => props.theme.colors.background};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-text']};

    strong {
      font-weight: 700;
    }
  }
`

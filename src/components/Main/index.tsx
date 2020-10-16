import * as Style from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'React, NextJS, Husk, Jest, Storybook +'
}) => (
  <Style.Wrapper>
    <Style.Logo src="/img/logo.svg" alt="logo"></Style.Logo>
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.Illustration
      src="/img/hero-illustration.svg"
      alt="carinha na cadeira mexendo no pc"
    ></Style.Illustration>
  </Style.Wrapper>
)
export default Main

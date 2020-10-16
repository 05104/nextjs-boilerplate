import * as Style from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Italo é viado. Só isso mesmo.'
}) => (
  <Style.Wrapper>
    <Style.Logo src="/img/logo.svg" alt="CHUPA VIADO"></Style.Logo>
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.Illustration
      src="/img/hero-illustration.svg"
      alt="ACESSIBILIDADE DE CU É ROLA VIADO!"
    ></Style.Illustration>
  </Style.Wrapper>
)
export default Main

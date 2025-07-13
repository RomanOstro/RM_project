import { Container, Content, DescriptionItem, LinkItem } from "./notFoundStyle"


export const NotFoundPage = () => {

  return (
    <Container>
      <Content>
        <DescriptionItem>Такой страницы не существует,
          <LinkItem to={'/'}> перейти на главную</LinkItem>
        </DescriptionItem>
      </Content>
    </Container>

  )
}
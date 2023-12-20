import { Helmet } from 'react-helmet';
import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Container>
        <Title>Yours Phonebook!</Title>
      </Container>
    </>
  );
}

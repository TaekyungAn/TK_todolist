import Cards from "Contents/Cards";
import Main from "Contents/MainContent";
import Footer from "Footer/Footer";
import Header from "Header/Header";
import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 65%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

function Home() {
  return (
    <HomeWrapper className="Home">
      <Header />
      <Main />
      <Cards />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;

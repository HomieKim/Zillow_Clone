import Header from "./components/Header";
import styled from "@emotion/styled";
import Footer from './components/Footer';

const AppLayout = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <AppLayout>
      <Header />
      <Footer />
    </AppLayout>
  );
}

export default App;

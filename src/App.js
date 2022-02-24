import Header from "./components/Header";
import styled from "@emotion/styled";
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import Contents from './components/Contents';

const AppLayout = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <AppLayout>
      <Header />
      <Contents />
      <Footer />
    </AppLayout>
  );
}

export default App;

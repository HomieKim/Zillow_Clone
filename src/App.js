import Header from "./components/Header";
import styled from "@emotion/styled";
import Footer from './components/Footer';
import 'antd/dist/antd.css';
import Contents from './components/Contents';
import { useState } from 'react';
import TabletView from './components/TabletView';

const AppLayout = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const [changeView, setChangeView] = useState(false);
  const handleChangeView = () => {
    setChangeView(!changeView);
  }
  return (
    <AppLayout>
      {changeView ? <TabletView handleChangeView={handleChangeView}/>:
        <>
          <Header handleChangeView={handleChangeView}/>
          <Contents />
          <Footer />
        </>
      }
    </AppLayout>
  );
}

export default App;

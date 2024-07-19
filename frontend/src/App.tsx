import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Highlight from './components/Highlight';
import Tabs from './components/Tabs';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = styled.main`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100%;
`;

const HighlightContainer = styled.div`
    height: 40vh;
`;

const TabsContainer = styled.div`
    height: 35vh;
`;

const NewsTickerContainer = styled.div`
    height: 25vh;
`;

const App: React.FC = () => {
    return (
        <AppContainer>
            <Header />
            <Main>
                <HighlightContainer>
                    <Highlight />
                </HighlightContainer>
                <TabsContainer>
                    <Tabs />
                </TabsContainer>
                <NewsTickerContainer>
                    <NewsTicker />
                </NewsTickerContainer>
            </Main>
            <Footer />
        </AppContainer>
    );
}

export default App;

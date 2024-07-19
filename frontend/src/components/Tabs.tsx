import React from 'react';
import styled from 'styled-components';
import DataTable from './DataTable';

const TabsContainer = styled.section`
    display: flex;
    gap: 20px;
    height: 100%;
`;

const Tab = styled.div`
    flex: 1;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: auto;

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    p {
        font-size: 16px;
        color: #555;
    }
`;

const Tabs: React.FC = () => {
    return (
        <TabsContainer>
            <Tab>
                <h2>Schedule</h2>
            </Tab>
            <Tab>
                <h2>Standings</h2>
                <DataTable data={{}} />
            </Tab>
            <Tab>
                <h2>Player Stats</h2>
                <DataTable data={{}} />
                <p>Summary info...</p>
            </Tab>
        </TabsContainer>
    );
}

export default Tabs;

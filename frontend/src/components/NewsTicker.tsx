import React from 'react';
import styled from 'styled-components';

const NewsTickerContainer = styled.section`
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
    display: flex;
    align-items: top;
    overflow: hidden;

    p {
        font-size: 18px;
        color: #555;
        white-space: nowrap;
        span {
            font-weight: bold;
            color: #000;
        }
    }
`;

const NewsTicker: React.FC = () => {
    return (
        <NewsTickerContainer>
            <p>Latest NHL News: <span>Breaking news goes here...</span></p>
        </NewsTickerContainer>
    );
}

export default NewsTicker;

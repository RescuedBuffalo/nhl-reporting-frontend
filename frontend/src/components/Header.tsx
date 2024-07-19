import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
    }
    a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>NHL Stats</Logo>
            <Nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Standings</a></li>
                    <li><a href="#">Player Stats</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;

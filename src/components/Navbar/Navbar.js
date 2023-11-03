import React from 'react';
import styled from 'styled-components';
import { navbar } from './NavbarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const Navbar = styled.div`${navbar} `

    return (
        <Navbar>
            <div>
                <FontAwesomeIcon icon={faBasketShopping} style={{ fontSize: '25px' }}/>
                <heading>ShopKaro</heading>
            </div>
        </Navbar>
    )
}

export default Navbar

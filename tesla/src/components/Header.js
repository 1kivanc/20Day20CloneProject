import React, { useState }  from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

function Header() {

    const [burgerStatus , setBurgerStatus] = useState(false);

    
    return (
        <Container>
            <a>
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>

                </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>

                <li><a href="#">Roadaster</a></li>

                <li><a href="#">Existing Inventory</a></li>

                <li><a href="#">Existing Inventory</a></li>

                
            </BurgerNav>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px ;
    justify-content:space-between;
    top: 0;
    right: 0;
    left:0;
    z-index:1;
`

const Menu = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        padding: 0px 10px;
        text-transform:uppercase;
        font-weight:600;
        flex-wrap:nowrap;
    }

    @media(max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    justify-content:center;
    a{
        padding: 0px 10px;
        text-transform:uppercase;
        font-weight:600;
        margin-right:10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer
`

const BurgerNav = styled.div`
    bottom:0;
    top:0;
    right:0;
    position:fixed;
    background-color:white;
    width:300px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;

    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition:transform 0.2s ease-in-out;

    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0, .2);
    }

    a{
        font-weight:600;
    }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`


const CloseWrapper = styled.div`

    display:flex;
    justify-content:flex-end;

`
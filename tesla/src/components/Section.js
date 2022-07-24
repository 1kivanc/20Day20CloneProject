import React from 'react'
import styled from 'styled-components'


function Section( {title , description ,leftBtnText , rightBtnText , backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
   
        <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
       
            
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    {rightBtnText && 
                        <RightButton>{rightBtnText}</RightButton>
                    }
                    
                    
                </ButtonGroup>

                <DownArrow src='/images/down-arrow.svg'/>

            </Buttons>

            

            
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image:${props => `url("/images/${props.bgImage}")`};
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;

`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px){
        flex-direction:column;
    }

`

const LeftButton = styled.div`
    width:256px;
    height:40px;
    color:white;
    background-color:rgba(23 , 26, 32,0.8);
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    margin:8px;
    cursor:pointer;

`
const RightButton = styled(LeftButton)`

    background-color:white;
    color:black;
    opacity:0.65;
`

const DownArrow = styled.img`

    
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;

`

const Buttons = styled.div`
`
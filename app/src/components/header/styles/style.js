import styled from 'styled-components'
import {Link as ReactRouterLink} from 'react-router-dom'
// Container, Logo, ButtonLink
export const Container = styled.div`
    display : flex;
    justify-content: space-around;
    
`

export const Logo = styled.img`
    text-align: center;
  
`
export const RightPanel = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    margin:0; padding:0;
    margin-right: 2rem; 
    
`
export const LeftPanel = styled.div`
    display : flex;
    align-items: center;
    margin:0; padding:0;
    margin-left: 1rem; 
`
export const Link = styled.div`
    margin : 0 auto; 
    margin-left: 1rem;
    margin-right: 1rem;  

`

export const Text = styled.div`
    margin:0; 
    padding:0;
    font-weight: 600;
    font-size: 1.1rem;
    color: black;
   
`
export const LogoText = styled.div`
    font-weight: 700;
    font-size: 3rem;
    color: rgb(20, 122, 255);
    margin:0; 
    padding:0;
    margin-right: 3rem;
    
`
export const LogoPosition = styled.div`
    margin : 0 auto;    
`
export const Background = styled.section`  `

export const ButtonLink = styled(ReactRouterLink)`
    
`

export const Group = styled.div`
display: flex;
align-items: center;`




export const TextLink = styled.p`
        color: #fff;
        text-decoration: none;
        margin-right: 30px;
        font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
        cursor: pointer;
        
        &:hover {
            font-weight: bold;
        }
        &:last-of-type {
            margin-right: 0;
        }
    `;

    export const Dropdown = styled.div`
    display: none;
    positon: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${TextLink} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;
        
        &:last-of-type {
            margin-bottom: 0;
        }
        
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
    `
    export const Profile = styled.div`
        display: inline;
        align-items: center;
        margin-left: 20px;
        position: relative;

        button {
            cursor: pointer;
        }

        &:hover > ${Dropdown} {
            display: flex;
            position: fixed;
            flex-direction: column;
        }`
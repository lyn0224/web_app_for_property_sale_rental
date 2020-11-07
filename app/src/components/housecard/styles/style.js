import styled from 'styled-components';

export const Container = styled.div`
        width:100%;
        height:88.5vh;
        
        overflow: scroll;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px,300px));
        grid-template-rows: repeat(auto-fill, minmax(auto));
        justify-content: center;  
        box-shadow: -5px 0px 10px -5px rgb(98, 98, 98);
`
export const Base = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    border: solid 1px rgb(194, 194, 194);
    margin: 0.5rem;
    *{
        margin:0;
    }
`
export const CardImg = styled.img`
        object-fit: cover;
        width: 100%;

`

export const CardButton = styled.button`

`

export const Title = styled.p`
        color:black;

`

export const Text = styled.p`
        color:black;
`

export const Link = styled.a`
        a{
            text-decoration:none;
        }
`


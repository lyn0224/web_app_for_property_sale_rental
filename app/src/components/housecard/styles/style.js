import styled from 'styled-components';

export const Container = styled.div`
        width:100%;
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px,400px));
        grid-template-rows: repeat(auto-fill, minmax(auto));
        justify-content: center;  
        box-shadow: -5px 0px 10px -5px rgb(98, 98, 98);
`
export const Base = styled.div`
    max-width: 300px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    border: solid 1px rgb(194, 194, 194);
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    transition: all 0.3s linear;
    margin: 1.5rem 1rem;
    *{
        margin:0;
    }
    &:hover {
        box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
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
        font-size:1.3rem;
`

export const Text = styled.p`
        color:black;
        margin:0;
`

export const Link = styled.a`
        a{
            text-decoration:none;
        }
`

export const Favorite = styled.i`
        position:  absolute;
        color: pink;
        font-size:30px;
        top: 5px;
        left: 10px;
        cursor: pointer;
        &:hover{
                opacity:0.7;
        }
`
export const ImageContainer = styled.div`
        position:relative
      
`
export const TextContainer = styled.div`
        position:relative
        display:flex;
`
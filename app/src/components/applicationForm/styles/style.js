import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    min-height: calc(100vh - 550px);
`;

export const Card = styled.div`
    display:flex;
    border-bottom: 1px solid #cccccc;
    height:400px;
    width:50%;
    align-items:center;
    margin: 0 5%;

`
export const Base = styled.div`

`
export const Button = styled.button`
    margin: 0 1.5rem;
    font-size: 1.5rem;
    background-color:#3d6eff;
    padding: 0.75rem 1.5rem;
    border-radius: 15px;
    color:white;
    font-weight: bolder;
    outline:none;
    border:1px solid #cccccc;
`

export const Text = styled.p`
    margin: 0 1rem;
    font-size: 1.5rem;
    
`  
export const ImageContainer = styled.div`
    position:relative;
    width:300px;
    margin:1rem;
`    
export const Image = styled.img`
    object-fit: cover;
    width: 100%;
`   
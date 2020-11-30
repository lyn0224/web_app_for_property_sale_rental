import styled from 'styled-components';

export const Container = styled.div`
       
       display: flex;
`
export const ImageBase = styled.div`
        text-align: center;
        width:50%;
        height: calc(100vh - 90px);
        overflow:scroll;
        overflow-x: hidden;
`
export const Base = styled.div`
        text-align: center;
        width:50%;
        height: calc(100vh - 90px);
        overflow:hiden;
        
`
export const CardImg = styled.img`
        object-fit: cover;
        width: 100%;
        

`

export const CardButton = styled.button`
        background: #e50914;
        border-radius: 4px;
        font-size: 15px;
        font-weight: bold;
        margin: 0 0 12px;
        padding: 0.75rem 1rem;
        border: 0;
        color: white;
        cursor: pointer;

`

export const Title = styled.p`
        font-size:1.5rem;
        font-weight:600;

`

export const Text = styled.p`
        padding:0 9em;
`

export const Link = styled.a`
        a{
            text-decoration:none;
        }
`


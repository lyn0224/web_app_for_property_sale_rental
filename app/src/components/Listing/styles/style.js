import styled from 'styled-components';

export const Container = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 min-height: calc(100vh - 550px);
`
export const Base = styled.div`
        display:flex;
        border-bottom: 1px solid #cccccc;
        height:300px;
        width:50%;
        align-items:center;
        justify-content:center;
`
export const ListingImg = styled.img`
        object-fit: cover;
        width: 100%;
`
export const ListingButton = styled.button`
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

export const Title = styled.p`
        font-size:1.5rem;
        font-weight:500;
`

export const Text = styled.p`
        font-size:1rem;
`

export const Link = styled.a`
        a{
            text-decoration:none;
        }
`
export const Favorite = styled.i`
    
`
export const ImageContainer = styled.div`
        position:relative;
        width:300px;
        margin:1rem;
`
export const TextContainer = styled.div`
        width: 300px;
   
`
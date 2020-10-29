import styled from 'styled-components'
import img from '../../../img/background.jpg'
export const Background = styled.section`
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 600px;
    background-color: #464646;
    padding: 4rem 0 ;
    outline: none;

`
export const Search = styled.div`
        width: 40%;
        position: relative;
        display: flex;  
        margin-left: auto;
        margin-right: auto;
        
        
`
export const SearchIcon = styled.button`
        outline: none;
        width: 40px;
        height: 50px;
        background:white;
        border: 1px solid white;
        border-radius: 0px 0.75rem 0.75rem 0px;
        text-align: center;
        color: black;
        cursor: pointer;
        font-size: 20px;
`
export const SearchInput = styled.input`
        width: 100%;
        border-right: none;
        padding: 6px;
        outline: none;
        border: 4px solid white;
        border-radius: 0.75rem 0rem 0rem 0.75rem;
        color: black;
        margin: 0 auto;
       
    
`
export const Title = styled.h1`
    color: white;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
`
export const Subtitle = styled.h3``
export const Group = styled.div`
   
`
// .search-container{
//     background-image: url("../src/img/background.jpg");
//     background-color: #8a8a8a;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-blend-mode: multiply;
//     height: 70vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// .search-container-searchbar{
//     width: 50%;
//     padding: 0.5em;
//     border-radius: 1em;
//     font-size: 1.5rem;
// }
// .search-container-text{
//     color: white;
//     font-size: 3rem;
//     margin: 2em 0;
// }${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')
import styled from 'styled-components';

export const Container = styled.div`
        
`;
export const FirstSection = styled.div`
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
`

export const Search = styled.div`
        width: 200px;
        position: relative;
        display: flex;  
        border: 1px solid #a8a8a8;
        border-radius: 10px;
        margin: 1rem;
        @media (max-width: 600px){
            width: 100px
        }
        
`
export const SearchIcon = styled.button`
        margin: 0;
        outline: none;
        width: 30px;
        height: 35px;
        background:white;
        border-radius: 10px;
        border:none;
        text-align: center;
        color: black;
        cursor: pointer;
        font-size: 15px;
`
export const SearchInput = styled.input`
        margin: 0;
        width: 100%;
        position
        padding: 6px;
        outline: none;
        border-radius: 10px;
        border:none;
        color: black;
        margin: 0 auto;
        &::-webkit-input-placeholder {
            font-size:14px;
            text-indent: 8px;
          }
    
`

export const SecondSection = styled.div`
    display: flex;
    @media (max-width:1000px){

        flex-direction: column;
    } 
`

export const List = styled.div`
    z-index: 10;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const Map = styled.div`
    box-sizing: border-box;
`;


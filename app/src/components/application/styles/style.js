import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display :${props => props.display};
    position:absolute;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.2;
    top:0px;
`;

export const Error = styled.div`

`;

export const Base = styled.div`
    display: ${props => props.display};
    position:absolute;
    top: 5vh;
    left: 35vw;
    height: 90vh;
    background-color: white;
    border-radius: 5px;
    margin: auto;
    width: 800px;
    opacity:2;
    border: 1px solid #cccccc;
    padding: 60px 68px 40px;
    
`;

export const Title = styled.h1`
    color:#3870ff;
    position: relative;
    margin-left:30%;
`;

export const Text = styled.p`

`;
export const InputField = styled.div`

`;

export const TextSmall = styled.h2`
 
`;

export const Link = styled(ReachRouterLink)`
    color: #fff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;
export const InputArea = styled.form`
    padding: 3rem;
    display:flex;
    flex-direction:column;
    width:600px;
    margin:0 auto;
    height: 80%;
    align-items: center;
    overflow: ${props => props.Scroll};
    overflow-x: hidden;
    
`
export const Input = styled.input`
    background: #ebeced;
    border: 1px solid #bababa;
    outline:none;
    border-radius: 4px;
    color: black;
    width:300px;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const TextArea = styled.textarea`
    background: #ebeced;
    border: 1px solid #bababa;
    border-radius: 4px;
    color: black;
    line-height: 30px;
    padding: 5px 20px;
    outline:none;
    width:300px;
    height:150px;
    margin-bottom: 20px;
`;

export const Submit = styled.button`
    position:absolute;
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 16px;
    width:200px;
    color: white;
    cursor: pointer;
    border:none;
    bottom: 5%;
    &:disabled {
        opacity: 0.5;
    }
`;
export const Close = styled.div`
    background: white;
    width:20px;
    height:30px;
    position:absolute;
    top:10px;
    left:20px;
    color: black;
    cursor: pointer;
    font-size:30px;
    &:disabled {
        opacity: 0.5;
    }
`;
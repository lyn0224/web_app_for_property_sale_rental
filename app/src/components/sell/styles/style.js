import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Notice = styled.div`
    width: 99%;
    height: 100px;
    background-color: #a8d5ef;
    padding-top: 10px;
    img {
        width: 70px;
        height: 70px;
        margin-left: 100px;
        float:left;
        border: 1px solid #a8a8a8;
        border-radius: 8px;
        margin-right: 100px;
    }
    p {
        margin-left: 100px;
        width: 800px;
        font-size: 1rem;
        margin-bottom: 0;
        margin-top: 0;
        padding-let: 30px;
    }
`
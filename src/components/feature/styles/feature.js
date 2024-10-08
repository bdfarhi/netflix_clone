import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column ;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`;
export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-weight: 500;
    margin:auto;
    font-size: 50px;

    @media (max-wdth: 600px) {
        font-size: 35px;
    }
`;
export const SubTitle = styled.h2`
  color: white;
    font-weight: normal;
    margin:auto;
    font-size: 26px;

    @media (max-wdth: 600px) {
        font-size: 18px;
    }
`;

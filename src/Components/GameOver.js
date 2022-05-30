import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
    border: 1px solid #616A94;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    &:hover {
        color: white;
        background-color: #616A94;
    }
`;
const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

export const GameOver = ({pts}) => {
    const refreshPage = ()=>window.location.reload();
  return (
    <>
        <Title>Game Over</Title>
        <Points>You scored {pts} out of 10</Points>
        <Button onClick={refreshPage}>Refresh</Button>
    </>
  )
}

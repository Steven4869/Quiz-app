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

const Intro = styled.div`
margin-top: 8em;
text-align:center;
`
export const Start = ({props}) => {
    const StartQuiz = () =>props(true)
  return (
    <Intro>
        <h1>Let's start the Quiz</h1>
        <Button onClick={StartQuiz}>Start</Button>
    </Intro>
  )
}

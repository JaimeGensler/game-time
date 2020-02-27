import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Spot = styled.button`
    width: 20vh;
    height: 20vh;
    font-family: 'Finger Paint', sans-serif;
    box-sizing: border-box;
    cursor: pointer;
    padding: 0;
    border: none;
    font-size: 20vh;
    line-height: 20vh;

    &:nth-of-type(2),
    &:nth-of-type(5),
    &:nth-of-type(8) {
        border-left: 5px solid black;
        border-right: 5px solid black;
    }
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
        border-top: 5px solid black;
        border-bottom: 5px solid black;
    }
    &:focus {
        outline: none;
    }
`;
const Unfilled = styled.p`
    text-align: center;
    margin: 0;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;
const Filled = styled.p`
    text-align: center;
    margin: 0;
`;

export default function Cell(props) {
    function handleClick() {
        const action = { type: 'MAKE_MOVE', location: props.location };
        props.dispatch(action);
    }
    if (props.value === 0) {
        const char = props.current > 0 ? 'x' : 'o';
        return (
            <Spot onClick={handleClick}>
                <Unfilled>{char}</Unfilled>
            </Spot>
        );
    } else {
        const char = props.value > 0 ? 'x' : 'o';
        return (
            <Spot>
                <Filled>{char}</Filled>
            </Spot>
        );
    }
}

Cell = connect()(Cell);

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Spot = styled.button`
    width: 20vh;
    height: 20vh;
    font-family: 'Finger Paint', sans-serif;
    box-sizing: border-box;
    padding: 0;
    border: none;
    font-size: 13vh;

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
    &:hover {
        opacity: 0.5;
    }
    text-align: center;
    margin: 0;
    opacity: 0;
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
    function colorize(char) {
        return { color: char === 'x' ? 'orange' : 'purple' };
    }
    if (props.value === 0) {
        const char = props.currentPlayer > 0 ? 'x' : 'o';
        return (
            <Spot style={colorize(char)} onClick={handleClick}>
                <Unfilled>{char}</Unfilled>
            </Spot>
        );
    } else {
        const char = props.value > 0 ? 'x' : 'o';
        return (
            <Spot style={colorize(char)}>
                <Filled>{char}</Filled>
            </Spot>
        );
    }
}

Cell = connect()(Cell);

import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    width: 60vh;
    margin: 20vh auto;
`;

export default function TicTacToe(props) {
    return (
        <Grid>
            {props.cells.map((row, i) =>
                row.map((val, j) => (
                    <Cell
                        value={val}
                        currentPlayer={props.currentPlayer}
                        location={[i, j]}
                        key={i + j}
                    />
                ))
            )}
        </Grid>
    );
}

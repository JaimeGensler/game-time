import React from 'react';
import { connect } from 'react-redux';
import TicTacToe from './TicTacToe';

function TTTControl(props) {
    return (
        <div>
            <TicTacToe current={props.current} cells={props.cells} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cells: state.board,
        current: state.activePlayer,
    };
};

TTTControl = connect(mapStateToProps)(TTTControl);

export default TTTControl;

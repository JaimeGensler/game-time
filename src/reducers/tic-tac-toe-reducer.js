export function ticTacToeReducer(state = {}, action) {
    // const newState = Object.assign({}, state);
    const newState = { ...state };
    switch (action.type) {
        case 'MAKE_MOVE':
            const { location } = action;
            newState.board = newState.board.map(x => x.map(y => y));
            newState.board[location[0]][location[1]] = newState.activePlayer;
            const { board } = newState;
            if (newState.turnNumber > 4) {
                const check = [];
                check.push(
                    Math.abs(board[location[0]].reduce((acc, val) => acc + val))
                );
                check.push(
                    Math.abs(
                        board
                            .map(x => x[location[1]])
                            .reduce((acc, val) => acc + val)
                    )
                );
                check.push(Math.abs(board[0][0] + board[1][1] + board[2][2]));
                check.push(Math.abs(board[2][0] + board[1][1] + board[0][2]));
                if (newState.turnNumber === 9) newState.gameState = 'TIE';
                if (check.includes(3)) newState.gameState = 'WIN';
            }
            if (newState.gameState === 'ACTIVE') {
                newState.activePlayer *= -1;
                newState.turnNumber++;
            }
            break;
        default:
            break;
    }
    return newState;
}

//

//

// {
//     board: [
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0]],
//     activePlayer: 1,
//     gameState: 'ACTIVE',
// }

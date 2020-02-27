export function ticTacToeReducer(state = initialState, action) {
    const newState = { ...state };
    switch (action.type) {
        case 'MAKE_MOVE':
            const [row, column] = action.location;
            newState.board = newState.board.map(x => x.map(y => y));
            newState.board[row][column] = newState.activePlayer;
            const { board } = newState;

            if (newState.turnNumber > 4) {
                const check = [];
                check.push(
                    Math.abs(board[row].reduce((acc, val) => acc + val))
                );
                check.push(
                    Math.abs(
                        board
                            .map(x => x[column])
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

const initialState = {
    board: Array(3).fill(Array(3).fill(0)),
    gameState: 'ACTIVE',
    activePlayer: Math.random() < 0.5 ? 1 : -1,
    turnNumber: 1,
};

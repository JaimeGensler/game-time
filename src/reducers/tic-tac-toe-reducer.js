export function ticTacToeReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case 'MAKE_MOVE':
            const { location } = action;
            newState.board[location[0]][location[1]] = newState.activePlayer;
            newState.activePlayer *= -1;
            newState.turnNumber++;
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

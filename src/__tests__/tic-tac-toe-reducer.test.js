import { ticTacToeReducer } from './../reducers/tic-tac-toe-reducer';

describe('ticTacToeReducer', () => {
    test('should return default state if no action type is recognized', () => {
        expect(ticTacToeReducer({}, { type: null })).toEqual({});
    });

    describe('MAKE_MOVE', () => {
        const dummyState = {
            board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            activePlayer: 1,
            gameState: 'ACTIVE',
            turnNumber: 1,
        };
        const action = { type: 'MAKE_MOVE', location: [0, 0] };

        test('should assign player value to specified board location', () => {
            expect(ticTacToeReducer(dummyState, action).board).toEqual([
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ]);
        });
        test('should change activePlayer when a move is made', () => {
            expect(ticTacToeReducer(dummyState, action).activePlayer).toEqual(
                -1
            );
        });
        test('should increment turnNumber when a move has been made', () => {
            expect(ticTacToeReducer(dummyState, action).turnNumber).toEqual(2);
        });
        test('should increment turnNumber when a move has been made', () => {
            expect(ticTacToeReducer(dummyState, action).turnNumber).toEqual(2);
        });
    });
});

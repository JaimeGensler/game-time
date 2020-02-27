import { ticTacToeReducer } from '../reducers/TicTacToe_Reducer';

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

        test.each([
            [[0, 0], [[1, 0, 0], [0, 0, 0], [0, 0, 0]]],
            [[0, 1], [[0, 1, 0], [0, 0, 0], [0, 0, 0]]],
            [[0, 2], [[0, 0, 1], [0, 0, 0], [0, 0, 0]]],
            [[1, 0], [[0, 0, 0], [1, 0, 0], [0, 0, 0]]],
            [[1, 1], [[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
            [[1, 2], [[0, 0, 0], [0, 0, 1], [0, 0, 0]]],
            [[2, 0], [[0, 0, 0], [0, 0, 0], [1, 0, 0]]],
            [[2, 1], [[0, 0, 0], [0, 0, 0], [0, 1, 0]]],
            [[2, 2], [[0, 0, 0], [0, 0, 0], [0, 0, 1]]],
        ])('assigns player value to location - (%s)', (input, expected) => {
            const result = ticTacToeReducer(dummyState, {
                type: 'MAKE_MOVE',
                location: input,
            });
            expect(result.board).toEqual(expected);
        });

        test.each([[1, -1], [-1, 1]])(
            'changes activePlayer - (%d => %d)',
            (input, expected) => {
                const result = ticTacToeReducer(
                    { ...dummyState, activePlayer: input },
                    action
                );
                expect(result.activePlayer).toEqual(expected);
            }
        );

        test.each([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]])(
            'increment turnNumber - (%d => %d)',
            (input, expected) => {
                const result = ticTacToeReducer(
                    { ...dummyState, turnNumber: input },
                    action
                );
                expect(result.turnNumber).toEqual(expected);
            }
        );

        test.each([
            [[[0, 1, 1], [0, 0, 0], [0, 0, 0]], 'WIN'],
            [[[0, 0, 0], [1, 0, 0], [1, 0, 0]], 'WIN'],
            [[[0, 0, 0], [0, 1, 0], [0, 0, 1]], 'WIN'],
        ])(
            'change gameState to win if row/col/dia is completed - (#%#)',
            (input, expected) => {
                const board = { ...dummyState, board: input, turnNumber: 5 };
                expect(
                    ticTacToeReducer(board, { type: null }).gameState
                ).toEqual('ACTIVE');
                const result = ticTacToeReducer(board, action);
                expect(result.gameState).toEqual(expected);
            }
        );
    });
});

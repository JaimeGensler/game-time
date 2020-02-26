import { ticTacToeReducer } from './../src/reducers/tic-tac-toe-reducer';

describe('ticTacToeReducer', () => {
    test('Should return default state if no action type is recognized', () => {
        expect(ticTacToeReducer({}, { type: null })).toEqual({});
    });
});

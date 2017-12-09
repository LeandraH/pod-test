import * from './constants';

const initialState = {
    podState: 'notSaved'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POD.SAVED:
            return { ...state, podState: 'saved' };
        default:
            return state;
    }
};

export default reducer;

import * as CONSTANTS from './constants';

const initialState = {
    podState: 'notSaved',
    currentPod: 'P1',
    availableRecords: ['1', '2', '3', '4']
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.POD.SAVED:
            return { ...state, podState: 'saved' };
        default:
            return state;
    }
};

export default reducer;

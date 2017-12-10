import { ACTION_TYPES } from './constants';

const initialState = {
    podState: 'notSaved',
    currentPod: 'P1',
    availableRecords: ['1', '2', '3', '4'],
    linkedRecord: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.POD.SAVED:
            return { ...state, podState: 'saved' };
        case ACTION_TYPES.LINK_RECORD:
            const availableRecords = state.availableRecords.filter(record => record !== action.record);
            return {
                ...state,
                linkedRecord: action.record,
                availableRecords
            };
        default:
            return state;
    }
};

export default reducer;

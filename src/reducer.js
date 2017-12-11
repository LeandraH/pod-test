import { ACTION_TYPES } from './constants';

const initialState = {
    podState: 'notSaved',
    currentPod: 'P1',
    availableRecords: ['1', '2', '3', '4'],
    linkedRecord: null,
    infoBoxStates: {
        POD: {
            title: 'POD',
            state: '(Draft)',
            name: '',
            shortName: 'P1',
            description: '',
            notes: ''
        },
        Record: {
            title: 'Record',
            state: 'Available',
            use: 'Simply drag and drop a Record component on this available drop point.',
            use2: 'This will create a new Record.',
            name: '',
            shortName: '1',
            recordVersion: '',
            description: '',
            notes: ''
        },
        Publishing: {}
    },
    infoBoxState: 'POD'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.POD.SAVED:
            return { ...state, podState: 'saved' };
        case ACTION_TYPES.LINK_RECORD:
            const availableRecords = state.availableRecords.filter(record => record !== action.record);
            const newInfoBox = state.infoBoxStates;
            newInfoBox.Record = {
                ...state.infoBoxStates.Record,
                state: 'Unlocked',
                shortName: action.record
            };
            return {
                ...state,
                linkedRecord: action.record,
                availableRecords,
                infoBoxStates: newInfoBox
            };
        case ACTION_TYPES.INPUT:
            const newInfoBoxStates = state.infoBoxStates;
            newInfoBoxStates[state.infoBoxState][action.field] = action.input;
            return { ...state, infoBoxStates: newInfoBoxStates };
        case ACTION_TYPES.ADD_RECORD:
            return { ...state, infoBoxState: 'Record' };
        default:
            return state;
    }
};

export default reducer;

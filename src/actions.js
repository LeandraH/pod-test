import { ACTION_TYPES } from './constants';

export const savePod = () => ({ type: ACTION_TYPES.POD.SAVED });

export const linkRecord = (record) => ({
    type: ACTION_TYPES.LINK_RECORD,
    record
});

export const input = (field, input) => ({
    type: ACTION_TYPES.INPUT,
    field,
    input
});

export const addRecord = () => ({
    type: ACTION_TYPES.ADD_RECORD
});

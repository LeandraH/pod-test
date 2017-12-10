import { ACTION_TYPES } from './constants';

export const savePod = () => ({ type: ACTION_TYPES.POD.SAVED });

export const linkRecord = (record) => ({
    type: ACTION_TYPES.LINK_RECORD,
    record
})

import { createDraftSafeSelector } from '@reduxjs/toolkit';

const user = createDraftSafeSelector(
    (state) => state['user'],
    (state) => state,
);

const token = createDraftSafeSelector(
    (state) => state['token'],
    (state) => state,
);


export const userSelectors = {
    user,
    token
};

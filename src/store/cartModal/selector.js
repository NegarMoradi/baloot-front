import { createDraftSafeSelector } from '@reduxjs/toolkit';

const cartModal = createDraftSafeSelector(
    (state) => state['cartModal'],
    (state) => state,
);

export const cartModalSelectors = {
    cartModal
};

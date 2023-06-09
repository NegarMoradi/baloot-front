import { createDraftSafeSelector } from '@reduxjs/toolkit';

const cart = createDraftSafeSelector(
    (state) => state['cart'],
    (state) => state,
);

export const cartSelectors = {
    cart
};

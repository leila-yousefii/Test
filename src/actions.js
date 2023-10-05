import { createAction } from"@reduxjs/toolkit"

export const addProduct = createAction('product/add');
export const setProduct = createAction('product/set');
export const removeProduct = createAction('product/remove');
export const updateProduct = createAction('product/update');


export const submitAnswer=createAction('survey/submit');
export const resetSurvey=createAction('survey/reset')
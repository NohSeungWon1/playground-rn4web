export const GET_TEXT = 'GET_TEXT';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const getText = () => ({ type: GET_TEXT });
export const changeText = (data: string) => ({ type: CHANGE_TEXT, payload: data });

const reducer = (state: any = { msg: '' }, action?: {type: string, payload?: string} ) => {
  if (action?.type === GET_TEXT) {
    return state
  }
  if (state && action?.type === CHANGE_TEXT) {
    state.msg = action?.payload
    return state
  }
  return state
}

export default reducer;
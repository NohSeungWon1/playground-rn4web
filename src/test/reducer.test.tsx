import reducer, {changeText} from '../reduxs/reducer';

describe('reducer test', () => {
  let state = reducer();
  it('default reducer result is empty object', () => {
    expect(state).toEqual({ msg: ''});
  });

  it('changeText action result is hello', () => {
    state = reducer(state ,changeText('hello'))
    expect(state).toEqual({msg: 'hello'});
  });

});
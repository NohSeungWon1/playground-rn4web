import { getText, changeText } from '../reduxs/reducer';

describe('action test', () => {
  it('create action work', () => {
    const wantedActionTypes = [
      {type: 'GET_TEXT'},
      {type: 'CHANGE_TEXT', payload: 'test'}
    ];

    const actions = [ getText(), changeText('test') ];

    expect(actions).toEqual(wantedActionTypes);
  })
})

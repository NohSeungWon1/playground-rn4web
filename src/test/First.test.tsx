import { render, fireEvent } from '@testing-library/react-native';
import First from '../component/First';
import { Provider } from 'react-redux';
import store from '../reduxs/store';

describe('First Component test', () => {
  it('after first render text is not yet', () => {
    const { getByText } = render(
      <Provider store={store}>
        <First />
      </Provider>
    );

    expect(getByText('not yet')).toBeTruthy();
  })

  it('after changeBtn click text is world', () => {
    const { getByText } = render(
      <Provider store={store}>
        <First />
      </Provider>
    );

    fireEvent.press(getByText('change'))
    expect(getByText('world')).toBeTruthy();
  })
})

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BookData from './components/BookData';
import store from './redux/store';

test('BookData component renders properly.', () => {
  render(
    <Provider store={store}>
      <BookData />
    </Provider>
  );
  const dataToTest = screen.getByText('Add New Book');
  expect(dataToTest).toBeInTheDocument();
});

test('BookData component renders properly.', () => {
  render(
    <Provider store={store}>
      <BookData />
    </Provider>
  );
  const dataToTest = screen.getByText('Add New Book');
  expect(dataToTest).toBeVisible();
});

// AllTheBooks.test.jsx
import { screen } from '@testing-library/dom';
import fantasy from '../../Books/fantasy.json';
import AllTheBooks from './AllTheBooks';
import { render } from '@testing-library/react';

test('verifico che le card siano tante quanto i libri cioè 150', async () => {
  render(<AllTheBooks books={fantasy} />);

  const cards = await screen.findAllByTestId('card');

  expect(cards).toHaveLength(150);
});
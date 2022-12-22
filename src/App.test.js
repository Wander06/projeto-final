import { render, screen } from '@testing-library/react';
import {fireEvent, waitFor} from '@testing-library/dom'
import App from './App';
import Calculadora from './componentes/Calculadora';
import "@testing-library/jest-dom/extend-expect";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("Deve aparecer o numero no display quando eu clicar na tecla numérica.", async () => {
  render(<Calculadora/>);
  // screen.debug()
  var teclaDois = screen.getByText('2');
  var teclaSoma = screen.getByText('+');
  var teclaTres = screen.getByText('3');
  var teclaResultado = screen.getByText('=');
  var display = screen.getByTestId('display');
  fireEvent.click(teclaDois);
  fireEvent.click(teclaSoma);
  fireEvent.click(teclaTres);
  fireEvent.click(teclaResultado);
  await waitFor(() =>
    expect(display).toHaveTextContent('6')
  )
});
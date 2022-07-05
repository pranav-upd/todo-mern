import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('we create a entry', async() => {
  render(<App />);
  const iptext = await screen.queryByAltText('iptext')
  const add_button = await screen.queryByAltText('img1')
  // First we create a dummy todo by entering text in the input textbox and firing the add button
  fireEvent.change(iptext, {target: { value: "testip" } });
  fireEvent.click(add_button)
  console.log("Test passed successfully!");
  })
  

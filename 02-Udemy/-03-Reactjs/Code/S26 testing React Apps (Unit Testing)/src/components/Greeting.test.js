import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting Component', () => {
  test('renders hello world as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText('Hello world!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders its good to see you', () => {
    // Arrange
    render(<Greeting />);

    // act
    // ... nothing

    // Assert
    const itsGoodElement = screen.getByText(`it's good to see you!`);
    expect(itsGoodElement).toBeInTheDocument();
  });

  test('renders text Changed! on Click', () => {
    // Arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const itsChangedElement = screen.getByText(`Changed!`);
    expect(itsChangedElement).toBeInTheDocument();
  });

  test('Chech the Text Will change after Click Button', () => {
    // Arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outPutChangedElement = screen.queryByText(`it's good to see you!`, {
      exact: false,
    });
    expect(outPutChangedElement).toBeNull();
  });
});

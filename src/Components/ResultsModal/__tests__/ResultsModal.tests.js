import { render, screen, fireEvent } from '@testing-library/react';
import ResultsModal from '../ResultsModal';

const closeModal = jest.fn();

const renderComponent = () => {
  render(<ResultsModal closeModal={closeModal} />);
};

describe('ResultsModal', () => {
  it('renders properly', () => {
    renderComponent();
    const text = screen.getByText(/success!/i);
    expect(text).toBeInTheDocument();
  });

  it('calls closeModal when close button is clicked', () => {
    renderComponent();

    const closeButton = screen.getByText(/X/i);
    fireEvent.click(closeButton);

    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it('calls closeModal when esc key is pressed', () => {
    renderComponent();
    const text = screen.getByText(/success!/i);

    fireEvent.keyDown(text, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});

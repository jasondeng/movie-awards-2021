import { render, screen } from '@testing-library/react';
import NomineeList from '../NomineeList';

const handleNomineeSelect = jest.fn();
const selectedNomimees = jest.fn();

const category = {
  id: 'best-visual-effects',
  items: [
    {
      title: 'The Midnight Sky',
      photoUrL:
        'https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg',
      id: 'midnight-sky',
    },
    {
      title: 'Tenet',
      photoUrL: 'https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg',
      id: 'tenet',
    },
  ],
  title: 'Best Visual Effects',
};

const nominees = category.items;

const renderComponent = () => {
  render(
    <NomineeList
      handleNomineeSelect={handleNomineeSelect}
      selectedNomimees={selectedNomimees}
      category={category}
      nominees={nominees}
    />
  );
};

describe('NomineeList', () => {
  it('renders properly', () => {
    renderComponent();

    const firstNominee = screen.getByText(/The Midnight Sky/i);
    const secondNominee = screen.getByText(/Tenet/i);

    expect(firstNominee).toBeInTheDocument();
    expect(secondNominee).toBeInTheDocument();
  });
});

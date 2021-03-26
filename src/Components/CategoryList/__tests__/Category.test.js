import { render, screen } from '@testing-library/react';
import Category from '../Category';

const handleNomineeSelect = jest.fn();
const selectedNomimees = jest.fn();

const category = {
  id: 'best-director',
  items: [
    {
      title: 'Chloé Zhao for Nomadland',
      photoUrL:
        'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
      id: 'chloe-zhao',
    },
    {
      title: 'Aaron Sorkin for The Trial of the Chicago 7',
      photoUrL:
        'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
      id: 'aaron-sorkin',
    },
  ],
  title: 'Best Director',
};

const renderComponent = () => {
  render(
    <Category
      handleNomineeSelect={handleNomineeSelect}
      selectedNomimees={selectedNomimees}
      category={category}
    />
  );
};

describe('Category', () => {
  it('renders properly', () => {
    renderComponent();

    const title = screen.queryAllByRole('heading', { level: 2 });
    const nominees = screen.queryAllByRole('heading', { level: 3 });

    expect(title).toHaveLength(1);
    expect(nominees).toHaveLength(2);
  });
});

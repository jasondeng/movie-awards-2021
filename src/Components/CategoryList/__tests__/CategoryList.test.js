import { render, screen } from '@testing-library/react';
import CategoryList from '../CategoryList';

const handleNomineeSelect = jest.fn();
const selectedNomimees = jest.fn();

const categories = [
  {
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
  },
  {
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
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg',
        id: 'tenet',
      },
    ],
    title: 'Best Visual Effects',
  },
];

const renderComponent = () => {
  render(
    <CategoryList
      handleNomineeSelect={handleNomineeSelect}
      selectedNomimees={selectedNomimees}
      categories={categories}
    />
  );
};

describe('CategoryList', () => {
  it('renders properly', () => {
    renderComponent();

    const categories = screen.queryAllByRole('heading', { level: 2 });
    const nominees = screen.queryAllByRole('heading', { level: 3 });

    expect(categories).toHaveLength(2);
    expect(nominees).toHaveLength(4);
  });
});

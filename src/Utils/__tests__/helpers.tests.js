import { getInitialNominees, areAllNomineesSelected } from '../helpers';

describe('helpers', () => {
  it('getInitialNominees', () => {
    const categories = [
      {
        id: 'best-picture',
        items: [
          {
            title: 'Nomadland',
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'nomadland',
          },
        ],
        title: 'Best Picture',
      },
      {
        id: 'best-director',
        items: [
          {
            title: 'Regina King for One Night in Miami',
            photoUrL:
              'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
            id: 'regina-king',
          },
        ],
        title: 'Best Director',
      },
    ];

    expect(getInitialNominees(categories)).toStrictEqual({
      'best-picture': null,
      'best-director': null,
    });
  });

  it('areAllNomineesSelected', () => {
    expect(
      areAllNomineesSelected({
        'best-picture': null,
        'best-director': null,
      })
    ).toBe(false);

    expect(
      areAllNomineesSelected({
        'best-picture': true,
        'best-director': null,
      })
    ).toBe(false);

    expect(
      areAllNomineesSelected({
        'best-picture': true,
        'best-director': true,
      })
    ).toBe(true);
  });
});

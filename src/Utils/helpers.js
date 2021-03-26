export const getInitialNominees = (categories) => {
  return categories.reduce(
    (category, curr) => ({ ...category, [curr.id]: null }),
    {}
  );
};

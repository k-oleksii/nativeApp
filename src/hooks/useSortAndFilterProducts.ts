import { data } from 'app/mock-data/data.ts';

export const useSortAndFilterProducts = (search: string, option?: boolean) => {
  return [...data].filter(product => {
    const productTitle = product.title.toLowerCase();
    const result = productTitle.includes(search.toLowerCase());

    if (option) {
      return result && product.isNew;
    }

    return result;
  });
};

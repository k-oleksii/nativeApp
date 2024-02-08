import { data } from 'app/mock-data/data.ts';
import { debounce } from 'app/helpers/debounce.ts';
import { useState, useEffect } from 'react';
import { ICard } from 'app/types';

export const useSortAndFilterProducts = (search: string, option?: boolean) => {
  const [filteredProducts, setFilteredProducts] = useState<ICard[]>([]);

  useEffect(() => {
    const debounceFilter = debounce(async () => {
      const filtered = [...data].filter(product => {
        const productTitle = product.title.toLowerCase();
        const result = productTitle.includes(search.toLowerCase());

        if (option) {
          return result && product.isNew;
        }

        return result;
      });

      setFilteredProducts(filtered);
    }, 300);

    debounceFilter(search, option);
  }, [search, option]);

  return filteredProducts;
};

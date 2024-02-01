import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { IMAGES_POPULAR } from 'app/constants';
import { createPopular } from 'app/lib/redux/slice';
import { RootState } from 'app/lib/redux/init/store.ts';
export const useLoadPopularProducts = () => {
  const dispatch = useDispatch();
  const popularProducts = useSelector((state: RootState) => state.popularSlice.data);

  useEffect(() => {
    if (popularProducts && popularProducts.length === 0) {
      dispatch(createPopular(IMAGES_POPULAR));
    }
  }, []);

  return popularProducts;
};

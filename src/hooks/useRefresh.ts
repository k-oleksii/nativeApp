import { useCallback, useState } from 'react';

// @ts-ignore
export const useRefresh = dispatchCallback => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    try {
      setIsRefreshing(true);
      await dispatchCallback();
    } finally {
      setIsRefreshing(false);
    }
  }, [dispatchCallback]);

  return { isRefreshing, onRefresh };
};

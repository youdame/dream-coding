import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? 'sale_' : ''}prdoducts.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => setError('에러 발생!'))
      .finally(() => setIsLoading(false));

    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);
  return [isLoading, error, products];
}

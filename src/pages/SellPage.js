import React, { useEffect, useState } from 'react';
import DefaultLayout from '../components/layout';
import { Sell } from '../components/sells';
import GetAllProduct from '../api/integrations/Products/GetAll';
import Chekout from '../components/checkout/Chekout';

const SellPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [data, setData] = useState(false);
  const [productSells, setProductSells] = useState([]);
  const date = new Date();
  useEffect(() => {
    getAll();
  }, []);
  const getAll = () => {
    setIsLoading(true);
    GetAllProduct()
      .then((res) => {
        setIsLoading(false);
        if (res) {
          setData(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleCheckout = () => {
    const dataCo = {
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      line_ids: productSells,
    };
    console.log(dataCo);
    setIsCheckout(true);
  };

  return (
    <DefaultLayout>
      {isCheckout ? (
        <Chekout
          productSells={productSells}
          data={data}
          onBack={() => setIsCheckout(false)}
          handleCheckout={handleCheckout}
        />
      ) : (
        <Sell
          data={data}
          getAll={getAll}
          isLoading={isLoading}
          productSells={productSells}
          setProductSells={setProductSells}
          onCheckout={handleCheckout}
        />
      )}
    </DefaultLayout>
  );
};

export default SellPage;

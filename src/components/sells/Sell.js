import React from 'react';
import BreadCrumbsSell from './BreadCrumbs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ProductCard } from '../products';
import Loader from '../loader/Loader';
import { Button } from '@material-tailwind/react';

const Sell = ({
  isLoading,
  data,
  productSells,
  getAll,
  setProductSells,
  onCheckout,
}) => {
  const increment = (id) => {
    const productFound = data.find((item) => item.id === id);
    if (!productFound) return;
    const alreadyExists = productSells.find((item) => item.product_id === id);

    if (alreadyExists) {
      // Jika produk sudah ada, tambahkan qty-nya
      setProductSells((prevProductSells) =>
        prevProductSells.map((item) =>
          item.product_id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      // Jika produk belum ada, tambahkan produk baru dengan qty 1
      const productToAdd = {
        product_id: productFound.id,
        qty: 1,
      };
      setProductSells((prevProductSells) => [
        ...prevProductSells,
        productToAdd,
      ]);
    }
  };
  const decrement = (id) => {
    const productIndex = productSells.findIndex(
      (item) => item.product_id === id,
    );

    if (productIndex !== -1) {
      const updatedProductSells = [...productSells];
      if (updatedProductSells[productIndex].qty > 1) {
        // Jika qty lebih dari 1, kurangi qty
        updatedProductSells[productIndex].qty -= 1;
      } else {
        // Jika qty adalah 1, hapus produk dari array
        updatedProductSells.splice(productIndex, 1);
      }

      setProductSells(updatedProductSells);
    }
  };
  return (
    <>
      <BreadCrumbsSell />
      <h1 className="text-4xl font-ysabeau font-bold mb-4 my-2">Penjualan</h1>
      <Button onClick={onCheckout} className="mb-6 flex items-center gap-2">
        <p>Checkout</p>
        <AiOutlineShoppingCart />
      </Button>
      <div className="flex flex-wrap gap-3">
        {!isLoading &&
          data.length > 0 &&
          data.map((item, i) => {
            const qty =
              productSells.find((prod) => prod.product_id === item.id)?.qty ??
              0;
            return (
              <ProductCard
                item={item}
                getAll={getAll}
                key={i}
                isSell
                increment={() => increment(item.id)}
                decrement={() => decrement(item.id)}
                qty={qty}
              />
            );
          })}
        {isLoading && <Loader className="text-black" />}
      </div>
    </>
  );
};

export default Sell;

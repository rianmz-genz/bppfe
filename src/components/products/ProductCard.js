import React from 'react';
import DialogEditProduct from './DialogEdit';
import DialogDeleteProduct from './DialogDelete';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const ProductCard = ({
  item,
  getAll,
  isSell = false,
  qty,
  increment,
  decrement,
}) => {
  return (
    <div className="w-48 flex flex-col justify-center items-start space-y-1">
      <img
        className="w-48 rounded-md h-48 object-cover"
        src={`data:image/png;base64,${item?.image}`}
        alt={item?.name}
      />
      <p className="text-2xl font-ysabeau font-bold">{item?.name}</p>
      <p>Rp. {item?.price.toLocaleString('id-ID')}</p>
      {isSell ? (
        <div className="flex items-center gap-2">
          <AiOutlineMinusCircle
            className="cursor-pointer"
            onClick={decrement}
          />
          <p>{qty}</p>
          <AiOutlinePlusCircle className="cursor-pointer" onClick={increment} />
        </div>
      ) : (
        <div>
          <DialogDeleteProduct id={item?.id} getAll={getAll} />
          <DialogEditProduct
            name={item?.name}
            price={item?.price}
            id={item?.id}
            getAll={getAll}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCard;

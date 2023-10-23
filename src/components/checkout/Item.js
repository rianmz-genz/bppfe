import React from 'react';

const CheckoutItem = ({ name, image, price, qty }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center justify-start w-full gap-3">
        <img
          className="w-4/12 h-28 object-cover"
          src={`data:image/png;base64, ${image}`}
          alt={name}
        />
        <div>
          <p className="text-xl font-ysabeau font-bold mb-2">{name}</p>
          <p>Rp. {price.toLocaleString('id-ID')}</p>
        </div>
      </div>
      <p>{qty}x</p>
    </div>
  );
};

export default CheckoutItem;

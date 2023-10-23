import React from 'react';

const BreadCrumbsCheckout = ({ onBack }) => {
  return (
    <div className="flex space-x-2">
      <p className="text-sm">EAA</p>
      <p className="text-sm">/</p>
      <button className="text-sm" onClick={onBack}>
        Penjualan
      </button>
      <p className="text-sm text-black/40">/</p>
      <p className="text-sm text-black/40">Checkout</p>
    </div>
  );
};

export default BreadCrumbsCheckout;

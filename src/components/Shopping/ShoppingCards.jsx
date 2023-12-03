import React from 'react';
import CardShoping from './CardShoping';

const ShoppingCards = () => {
  return (
    <section className="">
      <div className="mt-20">
        <h1 className="font-lovesunshine text-[2.4rem] text-center ">
          Shop Our New Arrivals
        </h1>
      </div>
      <div>
        <CardShoping/>
      </div>
    </section>
  );
};

export default ShoppingCards;

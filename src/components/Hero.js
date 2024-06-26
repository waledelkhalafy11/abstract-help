import React from "react";
import { DiVim } from "react-icons/di";
import digital_products from "../Assets/img/digital_products-hero.png";


const Hero = () => {
  return (
    <div className="flex-warp lg:pt-20 lg:flex justify-between items-center py-9 max-w-[1240px] mx-auto px-4">
      <div className="basis-1/2 mx-2">
        <p className="font-bold text-gray-500 font-sans">DIGITAL PRODUCTS</p>
        <h1 className="pt-5 text-gray-800 font-medium font-serif text-5xl">
          Sell online courses, coaching sessions, webinars, workshops, ebooks,
          and anything you can think of on Podia
        </h1>
        <h1 className="py-2 text-gray-500 font-normal font-sans text-2xl">
          Get everything you need in one place that you own. Podia takes care of
          hosting products, taking payments, and getting products to your
          customers. And you always control your own work.
        </h1>
        <button className="bg-Pblue my-5 px-6 py-3 text-xl font-sans font-medium text-white rounded-full hover:bg-blue-500  hover:cursor-pointer">
            Get your free account
          </button>
      </div >
      <div className="basis-1/2 m-4"><img className="shadow-md rounded-sm hover:shadow-xl cursor-pointer transition-shadow delay-150 ease-in-out duration-300" src={digital_products}/></div>
    </div>
  );
};

export default Hero;

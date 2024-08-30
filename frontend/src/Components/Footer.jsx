import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className=" flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam cum,
            quidem aliquid, quibusdam
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Empresa</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Inicio</li>
            <li>Sobre</li>
            <li>entrega</li>
            <li>termos de uso</li>
          </ul>
        </div>
        <div>
          <p className="text-x1 font-medium mb-5">entre em contato</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+5574579029</li>
            <li>emmail@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" py-5 text-sm text-center">
        
          2024 todos os direitos resservados
        </p>
      </div>
    </div>
  );
};

export default Footer;

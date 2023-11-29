import React from "react";
import Logo from "../components/logo";
import { Link } from "react-router-dom";
import { BreadCrumbsRegister, FormRegister } from "../components/register";

const RegisterPage = () => {
   return (
      <div className="w-full h-screen flex justify-center items-center">
         <section className="max-w-[500px] w-full font-poppins">
            <Logo className="mb-6 w-24" />
            <BreadCrumbsRegister />
            <h1 className="text-4xl font-ysabeau font-bold mb-4">Daftar</h1>
            <p className="font-ysabeau">
               <span className="font-bold">EAA</span> Manegement Toko Sederhana.
            </p>
            <FormRegister />
            <footer className="text-center mt-3">
               <p className="font-ysabeau">
                  Sudah memiliki akun?{" "}
                  <Link to={"/"} className="text-blue-500 cursor-pointer">
                     Masuk.
                  </Link>
               </p>
            </footer>
         </section>
      </div>
   );
};

export default RegisterPage;

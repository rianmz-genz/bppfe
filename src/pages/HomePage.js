import React from "react";
import { BreadCrumbsLogin, FormLogin } from "../components/login";
import Logo from "../components/logo";
import { Link } from "react-router-dom";

const HomePage = () => {
   return (
      <div className="w-full h-screen flex justify-center items-center">
         <section className="max-w-[500px] w-full font-poppins">
            <Logo className="mb-6 w-24" />
            <BreadCrumbsLogin />
            <h1 className="text-4xl font-ysabeau font-bold mb-4">Masuk</h1>
            <p className="font-ysabeau">
               <span className="font-bold">EAA</span> Manegement Toko Sederhana.
            </p>
            <FormLogin />
            <footer className="text-center mt-3">
               <p className="font-ysabeau">
                  Belum memiliki akun?{" "}
                  <Link
                     to={"/register"}
                     className="text-blue-500 cursor-pointer"
                  >
                     Daftar.
                  </Link>
               </p>
            </footer>
         </section>
      </div>
   );
};

export default HomePage;

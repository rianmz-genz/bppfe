import React, { useState } from "react";
import { Input, InputPassword } from "../input";
import { LoginApi } from "../../api/integrations/Auth/Login";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
const FormLogin = () => {
   const [form, setForm] = useState({
      email: "",
      password: "",
   });

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const navigate = useNavigate();
   const onSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      LoginApi(form)
         .then((res) => {
            console.log(res);
            if (!res.status) {
               setIsLoading(false);
               setError(true);
            } else {
               setError(false);
               navigate("/products");
            }
         })
         .catch((e) => {
            setError(e);
         });
   };

   return (
      <form
         onSubmit={onSubmit}
         className="flex flex-col justify-center items-start space-y-3"
      >
         <p
            className={`text-sm text-red-500 text-start transition-all duration-300 ${
               error ? "opacity-100 visible" : "invisible opacity-0"
            }`}
         >
            Data salah atau akun tidak ditemukan
         </p>
         <Input
            title="Email"
            placeholder="Masukan Email Anda"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
         />
         <InputPassword
            id={"password"}
            placeholder={"Masukan kata sandi anda"}
            title={"Kata Sandi*"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
         />
         <button
            type="submit"
            disabled={
               isLoading ||
               form.email.length === 0 ||
               form.password.length === 0
            }
            className={`${
               form.email.length === 0 || form.password.length === 0
                  ? "bg-black/60"
                  : "bg-black"
            } w-full py-4 text-white transition-all duration-300 ease-in-out flex justify-center items-center`}
         >
            {isLoading ? <Loader /> : "Masuk"}
         </button>
      </form>
   );
};

export default FormLogin;

import React, { useState } from "react";
import { Input, InputPassword } from "../input";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../../api/integrations/Auth/Register";
const FormRegister = () => {
   const [form, setForm] = useState({
      email: "",
      password: "",
      name: "",
   });

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const navigate = useNavigate();
   const onSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      RegisterApi(form)
         .then((res) => {
            console.log(res);
            if (!res.status) {
               setIsLoading(false);
               setError(true);
            } else {
               setError(false);
               navigate("/");
            }
         })
         .catch((e) => {
            setError(e);
         })
         .finally(() => {
            setIsLoading(false);
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
            title="Nama Toko"
            placeholder="Masukan Nama Toko Anda"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
         />
         <Input
            title="Email"
            placeholder="Masukan Email Toko Anda"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
         />
         <InputPassword
            id={"password"}
            placeholder={"Masukan kata sandi"}
            title={"Kata Sandi*"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
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
            {isLoading ? <Loader /> : "Daftar"}
         </button>
      </form>
   );
};

export default FormRegister;

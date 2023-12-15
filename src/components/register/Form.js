import React, { useState } from "react";
import { Input, InputPassword, TextArea } from "../input";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../../api/integrations/Auth/Register";
import { PaymentApi } from "../../api/integrations/Auth/Payment";
const FormRegister = () => {
   const [form, setForm] = useState({
      email: "",
      password: "",
      name: "",
      phone: "",
      address: "",
      image_1920: null,
   });
   const [formPayment, setFormPayment] = useState({
      summary: "",
      image: null,
   });

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const navigate = useNavigate();
   const onSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      RegisterApi(form)
         .then((res) => {
            if (!res.status) {
               setIsLoading(false);
               setError(true);
            } else {
               setError(false);
               PaymentApi({ ...formPayment, user_id: res.data.user_id })
                  .then((res) => {
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
         <p className="font-ysabeau">Masukan data toko Anda!</p>
         <Input
            title="Nama Toko"
            placeholder="Masukan Nama Toko Anda"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
         />
         <Input
            title="Nomor Telepon Toko"
            placeholder="08..."
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
         <TextArea
            title="Alamat*"
            placeholder="Masukan Alamat Toko Anda"
            id="address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
         />
         <Input
            title="Logo*"
            placeholder="Masukan Logo Toko Anda"
            id="image_1920"
            onChange={(e) => {
               console.log(e.target.files);
               setForm({ ...form, image_1920: e.target.files[0] });
            }}
            required
            type="file"
         />
         <div className="w-full border-t my-3"></div>
         <p className="font-ysabeau">
            Untuk menggunakan layanan Kami, harap membayar{" "}
            <span className="font-bold">100k</span> melalui QR dibawah.
         </p>
         <img src="/images/qrcode.jpeg" alt="qr" />
         <Input
            title="Upload Bukti Pembayaran*"
            placeholder="Masukan Logo Toko Anda"
            id="image_1920"
            onChange={(e) =>
               setFormPayment({ ...formPayment, image: e.target.files[0] })
            }
            required
            type="file"
         />
         <Input
            title="Atas Nama"
            placeholder="Masukan Atas Nama Pembayaran"
            id="atasNama"
            value={formPayment.summary}
            onChange={(e) =>
               setFormPayment({ ...formPayment, summary: e.target.value })
            }
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

import axios from "axios";
import { urlLogin } from "../../routes/Auth";

export const LoginApi = async (form) => {
   const formData = new FormData();
   formData.append("email", form.email);
   formData.append("password", form.password);
   formData.append("db", process.env.REACT_APP_BACKEND_DB);

   const response = await axios({
      baseURL: urlLogin,
      method: "POST",
      data: formData,
      headers: {
         "Content-Type": "multipart/form-data",
      },
   });
   return response.data;
};

import { urlLogin } from "../../routes/Auth";

export const LoginApi = async (form) => {
   try {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("db", process.env.REACT_APP_BACKEND_DB);

      const response = await fetch(urlLogin, {
         method: "POST",
         body: formData,
         headers: {
            Accept: "application/json",
         },
      });
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      return responseData;
   } catch (err) {
      throw new Error(err);
   }
};

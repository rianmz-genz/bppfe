import { urlRegister } from "../../routes/Auth";

export const RegisterApi = async (form) => {
   const formData = new FormData();
   formData.append("email", form.email);
   formData.append("password", form.password);
   formData.append("name", form.name);
   formData.append("address", form.address);
   formData.append("phone", form.phone);
   formData.append("image_1920", form.image_1920);

   const response = await fetch(urlRegister, {
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
   console.log(responseData);
   return responseData;
};

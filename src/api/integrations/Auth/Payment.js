import { urlPayment } from "../../routes/Auth";

export const PaymentApi = async (form) => {
   const formData = new FormData();
   formData.append("image", form.image);
   formData.append("summary", form.summary);
   formData.append("user_id", form.user_id);

   const response = await fetch(urlPayment, {
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

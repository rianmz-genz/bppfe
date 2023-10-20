import { urlEditProduct } from "../../routes/Products";

const EditProduct = async ({ form, id }) => {
   try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("image", form.image);

      const response = await fetch(`${urlEditProduct}/${id}`, {
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
export default EditProduct;

import axios from "axios";
import { urlDeleteProduct } from "../../routes/Products";

const DeleteProduct = async ({ id }) => {
   try {
      const res = await axios.post(`${urlDeleteProduct}/${id}`);
      return res.data;
   } catch (error) {
      throw new Error(error);
   }
};

export default DeleteProduct;

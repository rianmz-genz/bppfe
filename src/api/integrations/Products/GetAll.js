import axios from "axios";
import { urlGetAllProduct } from "../../routes/Products";

const GetAllProduct = async () => {
   try {
      const res = await axios.post(urlGetAllProduct);
      return res.data;
   } catch (error) {
      throw new Error(error);
   }
};

export default GetAllProduct;

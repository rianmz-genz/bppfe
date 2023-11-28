import { getUid } from "..";
import { urlCreateProduct } from "../../routes/Products";
import { headers } from "./GetAll";
import axios from 'axios'

const CreateProduct = async (form) => {
   const data = new FormData();
   data.append("name", form.name);
   data.append("price", form.price);
   data.append("image", form.image);
   data.append("uid", getUid())
   const res = await axios(urlCreateProduct, {
      method: "POST",
      headers,
      data
   })
   return res.data
};
export default CreateProduct;

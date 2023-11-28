import { urlGetAllProduct } from "../../routes/Products";
import { getUid } from "..";
import axios from 'axios'
export const headers = new Headers({
   "Content-Type": "multipart/form-data",
});
const GetAllProduct = async () => {
   const body = new FormData()
   body.append('uid', getUid())
   const res = await axios(urlGetAllProduct, {
      method: "POST",
      headers,
      data: body
   })
   return res.data
};

export default GetAllProduct;

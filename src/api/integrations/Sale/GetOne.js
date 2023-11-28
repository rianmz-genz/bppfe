import axios from "axios";
import { urlOneSale } from "../../routes/Sale";
const headers = new Headers({
   "Content-Type": "multipart/form-data",
});
const GetOne = async (id) => {
   const res = await axios(`${urlOneSale}/${id}`, {
      method: "POST",
      headers,
      data: null,
   });
   return res.data;
};
export default GetOne;

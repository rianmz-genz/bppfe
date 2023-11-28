import axios from "axios";
import { urlGetAllSale } from "../../routes/Sale";
import { getUid } from "..";
const headers = new Headers({
   "Content-Type": "multipart/form-data",
});
const GetAllSale = async (data) => {
   const formData = new FormData();
   formData.append("uid", getUid());
   const res = await axios(urlGetAllSale, {
      method: "POST",
      headers,
      data: formData,
   });
   return res.data;
};
export default GetAllSale;

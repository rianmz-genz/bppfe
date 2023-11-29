import axios from "axios";
import { urlCreateSale } from "../../routes/Sale";
import { getUid } from "..";
const headers = new Headers({
   "Content-Type": "multipart/form-data",
});
const CreateSale = async (data) => {
   const formData = new FormData();
   formData.append("data", JSON.stringify(data));
   formData.append("uid", getUid());
   const res = await axios(urlCreateSale, {
      method: "POST",
      headers,
      data: formData,
   });
   return res.data;
};
export default CreateSale;

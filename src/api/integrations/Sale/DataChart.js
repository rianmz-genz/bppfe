import { getUid } from "..";
import axios from "axios";
import { urlDataChart } from "../../routes/Sale";
export const headers = new Headers({
   "Content-Type": "multipart/form-data",
});
const DataChartApi = async () => {
   const body = new FormData();
   body.append("uid", getUid());
   const res = await axios(urlDataChart, {
      method: "POST",
      headers,
      data: body,
   });
   return res.data;
};

export default DataChartApi;

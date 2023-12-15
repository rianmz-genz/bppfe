import { getUid } from "..";
import { urlMe } from "../../routes/Auth";

const MeApi = async () => {
   try {
      const formData = new FormData();
      formData.append("uid", getUid());
      const response = await fetch(urlMe, {
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
export default MeApi;

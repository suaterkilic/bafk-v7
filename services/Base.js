import axios from "axios";

export default {
  api: async (params) => {
    try {
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      let API_URL = "";

      API_URL = "https://admin.bafkoriginal.com/api/";

      return await axios.post(API_URL, params.data, headers);
    } catch (error) {
      return error;
    }
  },
};

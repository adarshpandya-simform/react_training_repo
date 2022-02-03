import axios from "axios";

// custom hook for axios helper (get,post method)
export const useAxios = () => {
  // axios get method
  const get = async (url, contentType = "application/json") => {
    try {
      const { data, status } = await axios.get(url, {
        headers: { "Content-Type": contentType },
      });
      return { data, status, err: null };
    } catch (err) {
      return { data: null, status: err.response.status, err };
    }
  };

  // axios post data
  const post = async (url, postData, contentType = "application/json") => {
    try {
      const { data, status } = await axios.post(
        url,
        { ...postData },
        {
          headers: {
            "Content-Type": contentType,
            Authorization:
              "Bearer 0dd28522184052aae08e960f27922c89ee45fde5700bd15696ed13ab73c19476",
          },
        }
      );
      return { data, status, err: null };
    } catch (err) {
      return { data: null, status: err.response.status, err };
    }
  };

  // returning get and post method from hook
  return { get, post };
};

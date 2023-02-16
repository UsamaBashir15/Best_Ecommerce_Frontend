import axios from "axios";

export const postProductApi = async (props) => {
  try {
    const res = await axios.post("http://localhost:5000/api/product", props);

    console.log("Yes", res.headers);
    return res;
  } catch (error) {
    console.log("Post Product Error", error);
  }
};

export const putProductApi = async ({ id, data }) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/product/${id}`,
      data
    );
    return res;
  } catch (error) {
    console.log("Put Product Error", error);
  }
};

export const getProductApi = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/product");
    return res;
  } catch (error) {
    console.log("Get Product Error", error);
  }
};

export const deleteProductApi = async ({ id, data }) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/product/${id}`,
      data
    );
    return res;
  } catch (error) {
    console.log("Delete Product Error", error);
  }
};

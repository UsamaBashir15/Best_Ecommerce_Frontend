import axios from "axios";

export const postCartProductApi = async (props) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/cartproduct",
      props
    );

    return res;
  } catch (error) {
    console.log("Post Cart Product Error", error);
  }
};

export const putCartProductApi = async ({ id, data }) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/cartproduct/${id}`,
      data
    );
    return res;
  } catch (error) {
    console.log("Put Cart Product Error", error);
  }
};

export const getCartProductApi = async (userId) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/cartproduct/${userId}`
    );
    return res;
  } catch (error) {
    console.log("Get Cart Product Error", error);
  }
};

export const deleteCartProductApi = async ({ id, data }) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/cartproduct/${id}`,
      data
    );
    return res;
  } catch (error) {
    console.log("Delete Cart Product Error", error);
  }
};

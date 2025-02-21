import axios from "axios";

const Domain = "https://fakestoreapi.com/products";

export async function FakePosts() {
  try {
    const response = await axios.get(Domain);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function FakeSinglePost(id) {
  try {
    const response = await axios.get(`${Domain}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

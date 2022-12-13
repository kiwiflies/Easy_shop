
import axiosSet from "../../helpers/axiosSet";

export default async function getCategories() {
  const data = await axiosSet.get(`api/product/category/list`);
  
  return data.data.data || []
}

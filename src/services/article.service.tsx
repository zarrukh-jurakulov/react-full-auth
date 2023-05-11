import api from "./api";

const getArticles = async () => {
  const url = "articles";
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

const getArticlesById = async (id: any) => {
  const url = `article/${id}`;
  try {
    const { data } = await api.get(url);
    return { data };
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export { getArticles, getArticlesById };

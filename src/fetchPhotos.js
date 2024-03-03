import axios from "axios";

export default async function fetchPhotos(query, page) {
  axios.defaults.baseURL = "https://api.unsplash.com/";

  const response = await axios.get("/search/photos", {
    params: {
      query,
      client_id: "sGQhfUfrcGC2TIWd2j-HqzgGv4P0IjBuYYiOIlEMSyI",
      per_page: 5,
      page,
    },
  });
  return response.data;
}

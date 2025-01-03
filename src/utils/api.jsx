import { jwtStorage } from "./jwt_storage";

const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const loadImage = (image_path) => {
  return REACT_APP_API_URL + "/static/show_image/" + image_path;
};

export const getData = async (url) => {
    return fetch(REACT_APP_API_URL + url)
      .then((response) =>
        response.status >= 200 &&
        response.status <= 299 &&
        response.status !== 204
          ? response.json()
          : response,
      )
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  };
  
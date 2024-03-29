import axios from "axios";

const API_restaurant = axios.create({
    baseURL: "http://127.0.0.1:8000/dash/api/",
});

export const addFood_API = async(formData) => {
    console.log(formData);
    const res = await API_restaurant.post("/createFood/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res;
};

export const addRestaurant_API = async(formData) => {
    console.log(formData);

    const res = await API_restaurant.post("/CreateSiteAdmin/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res;
};

export const getRestaurant_API = async() => {
    const res = await API_restaurant.get("/GetCreateSiteAdmin");
    return res;
};

export const restaurantAdminLogin_API = async(loginData) => {
    const res = await API_restaurant.post("/restaurantAdminLoginView/", loginData);
    return res
};

export const getRestaurantMenu_API = async(restaurantName) => {
    let api = '/allMenu/' + restaurantName
    const res = await API_restaurant.get(api);
    return res;
};

export const deleteRestaurant_API = async(restaurantName) => {
    let api = '/deleteRestaurant/' + restaurantName
    const res = await API_restaurant.delete(api);
    return res;
};

export const deleteFood_API = async(restaurantName, foodName) => {
    let api = '/deleteRestaurant/' + restaurantName + "/" + foodName
    const res = await API_restaurant.delete(api);
    return res;
};

export const getRestaurantDetail_API = async(restaurantName) => {
    let api = '/getRestaurantDetail/' + restaurantName
    const res = await API_restaurant.get(api);
    return res;
};

export const updateRate_API = async(restaurantName, rate) => {
    let api = '/Rate/' + restaurantName + '/' + rate
    const res = await API_restaurant.patch(api);
    return res;
};
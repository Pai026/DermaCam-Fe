import { fireRequest } from "./fireRequest.js";

export const postLogin = (form) => {
    return fireRequest("login", [], form);
};

export const postRegister = (form) => {
    return fireRequest("register", [], form);
};

export const getCurrentUser = () => {
    return fireRequest("currentUser")
}
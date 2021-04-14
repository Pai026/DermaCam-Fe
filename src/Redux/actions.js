import { fireRequest } from "./fireRequest.js";

export const postLogin = (form) => {
    return fireRequest("login", [], form);
};
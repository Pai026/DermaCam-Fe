/* eslint-disable import/no-anonymous-default-export */
export default {
    login: {
        path: "/user/login",
        method: "POST",
        noAuth: true,
    },
    register: {
        path: "/user/register",
        method: "POST",
        noAuth: true,
    },
    currentUser: {
        path: "/user/getUser",
        method: "GET",
        noAuth: false
    },
    uploadImage: {
        path: "/user/uploadImage",
        method: "POST",
        noAuth: true
    }
};
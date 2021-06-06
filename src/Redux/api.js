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
    noAuth: false,
  },
  uploadImage: {
    path: "/user/uploadImage",
    method: "POST",
    noAuth: true,
  },
  getHealthDetails: {
    path: "/user/userHealthDetail",
    method: "GET",
    noAuth: false,
  },
  addHealthDetails: {
    path: "/user/patientHealthDetails",
    method: "POST",
    noAuth: false,
  },
  findNearbyDoctors: {
    path: "/user/findNearbyDoctors",
    method: "GET",
    noAuth: false,
  },
};

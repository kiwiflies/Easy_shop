import axios from "axios";
let token = {};

if (typeof window !== "undefined") {
  token = localStorage.getItem("user") ? {Authorization: `Bearer ${token}`} : {};
}

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...token,
    'X-locale': 'en',
  },
});

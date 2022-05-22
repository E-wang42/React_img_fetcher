import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 32a-6-Gw_9fr78rp2IVBzhScXWvH8KG6KmUE4SvEND8",
  },
});

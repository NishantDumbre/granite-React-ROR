import axios from "axios";

const fetch = () => axios.get("/posts");

const postApis = { fetch };

export default postApis;

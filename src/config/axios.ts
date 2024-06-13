import axios from "axios";
import { getBaseURL } from "./url";

axios.defaults.baseURL = getBaseURL();

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

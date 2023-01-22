import { $host } from "./index";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchGroups = async () =>{
    const {data} = await axios
    .get(`${apiUrl}/api/groups`)
    console.log(data);
    return data.data;
}
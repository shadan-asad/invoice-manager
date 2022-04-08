import axios from "axios"

export const getData = async () => {
    let response = await axios.get("http://localhost:8080/highradius/fetch");
    let data = response.data;
    return data;
}

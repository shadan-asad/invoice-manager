import axios from "axios"

export const getData = async () => {
    let response = await axios.get("http://localhost:8080/highradius/fetch");
    let data = response.data;
    return data;
}

export const deleteData = async() => {

    let data = "sl_no=" + 0;
    let response = await axios.get('http://localhost:8080/highradius/delete?'+data);
    console.log(response.data)
  }
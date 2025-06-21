import React from "react";
import axios from "axios";

const fetchData = async (id = null) => {

     const url = id
      ? `http://127.0.0.1:8080/api/plants/${id}`
      : `http://127.0.0.1:8080/api/plants/`;

    const response = await axios.get(url);
    if (response.status === 200) {
        console.log("Data fetched successfully:", response.data);
        return response.data;
    } else {
        throw new Error("Failed to fetch data");
    }
}
export default fetchData;
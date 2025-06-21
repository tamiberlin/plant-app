import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./fetch_data";

export default function PlantDetails() {
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState(null);
  const [displayFields, setDisplayFields] = useState([]); 
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching plant details for ID:", id);
    const getPlantDetails = async () => {
      try {
        const data = await fetchData(id);
        if (data) {
          console.log("Fetched:", data);
          setDisplayFields(Object.keys(data));
          setPlant(data);
        } else {
          setError("Plant not found.");
        }
      } catch (err) {
        setError("Failed to fetch plant details.");
        console.error(err);
      }
    };
    if (id) {
      getPlantDetails();
    }
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!plant) return <p>Loading...</p>;

  return (
    <div>
        <span><a href="/">◀view all plants</a></span>
      <h1>plant datails</h1>
      {displayFields.map((field) =>
        plant[field] != null ? (
          <div key={field}>
            <strong>{field}:</strong>{" "}
            {Array.isArray(plant[field])
              ? plant[field].join(", ")
              : typeof plant[field] === "object"
              ? JSON.stringify(plant[field])
              : plant[field]}
          </div>
        ) : null
      )}
      {plant.Img && (
        <div>
          <img src={plant.Img} alt={plant["Latin name"]} width={300} />
        </div>
      )}
    </div>
  );
}

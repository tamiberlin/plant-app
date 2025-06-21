import { useEffect, useMemo, useState } from "react";
import fetchData from "./fetch_data";
import {Link} from "react-router-dom";

export function filterPlants(plants, searchTerm, category) {
  return plants.filter((plant) => {
    const matchesSearch =
      plant.latinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.family.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? plant.category === category : true;
    return matchesSearch && matchesCategory;
  });
}

export default function Plants() {
  const [originalPlants, setOriginalPlants] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlants = async () => {
      try {
        const data = await fetchData();
        setOriginalPlants(data); 
      } catch (err) {
        setError("Failed to fetch plants.");
        console.error(err);
      }
    };
    getPlants();
  }, []);

  const filteredPlants = useMemo(() => {
    return filterPlants(originalPlants, searchTerm, category);
  }, [originalPlants, searchTerm, category]);

  const categories = useMemo(() => {
    return [...new Set(originalPlants.map((plant) => plant.category))];
  }, [originalPlants]);

  return (
    <div>
      <h1>Plants</h1>

      <input
        type="text"
        placeholder="Filter plants by latin name or family"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {filteredPlants.length > 0 ? (
        <table border={1} borderColor="black">
          <thead>
            <tr>
              <th>Latin Name</th>
              <th>Family</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlants.map((plant) => (
              <tr key={plant.id}>
                <td>
                  <Link to={`/${plant.id}`} underline="none">
                    {plant.latinName}
                  </Link>
                </td>
                <td>{plant.family}</td>
                <td>{plant.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

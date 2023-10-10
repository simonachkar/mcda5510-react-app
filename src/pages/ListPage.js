import { useEffect, useState } from "react";
import "../App.css";
import Provinces from "../components/Provinces";

function ListPage({ type }) {
      // Define a state variable to hold the fetched data
  const [data, setData] = useState(null);

  // Define a state variable to track loading state
  const [loading, setLoading] = useState(true);

  // Define a state variable to track any errors
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Make an API request
      const response = await fetch(
        `https://my-json-server.typicode.com/simonachkar/demo-canada-api-server/${type}`
      );

      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the response data as JSON
      const responseData = await response.json();

      // Update the 'data' state with the fetched data
      setData(responseData);

      // Set 'loading' to false since the data has been loaded
      setLoading(false);
    } catch (error) {
      // Handle any errors that occur during the fetch
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className="App">
      { type=== 'provinces' ? 'Provinces' : 'Territories' }
      <Provinces data={data} error={error} loading={loading} />
    </div>
  );
}

export default ListPage;

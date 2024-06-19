import { useEffect, useState } from "react";

export default function useJsonData(fileName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/1-static/configs/${fileName}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Failed to fetch JSON:", error));
  }, [fileName]);

  return data;
}

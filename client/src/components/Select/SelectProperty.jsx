/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";


const SelectProperty = () => {
   useEffect(() => {
      const loadProperties = async () => {
         try {
            const developers = await fetch("/api/properties", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify()
            });

            const data = await developers.json();
            setDevelopersList(data);
         } catch (error) {
            console.error("Error fetching data: ", error);
         }
      };
      loadDevelopers();
   }, []);

   const [propertiesList, setPropertiesList] = useState([{}]);
  return (
    <div>SelectProperty</div>
  )
}

export default SelectProperty
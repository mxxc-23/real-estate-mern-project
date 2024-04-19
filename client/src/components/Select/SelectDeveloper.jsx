/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";

const SelectDeveloper = () => {
   const [developersList, setDevelopersList] = useState([{}]);
   const [selected, setSelected] = useState(null);
  

   useEffect(() => {
      const loadDevelopers = async () => {
         try {
            const developers = await fetch("/api/developers", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
            });

            const data = await developers.json();
            setDevelopersList(data);
         } catch (error) {
            console.error("Error fetching data: ", error);
         }
      };
      loadDevelopers();
   }, []);

   const handleDeveloperClick = (developer) => {
      setSelected(developer);
      console.log(selected)
   };

   return (
      <div className="flex flex-col gap-3 overflow-hidden">
         {developersList.map((developer) => (
            <div onClick={() => handleDeveloperClick(developer)} className="hover:bg-slate-300 py-2 rounded border" value={developer._id} key={developer._id}>
               <h1 className="pl-3">{developer.developer_name}</h1>
            </div>
         ))}
      </div>
   );
};

export default SelectDeveloper;

import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import desktop from "./assets/images/pattern-divider-desktop.svg";
import icon from "./assets/images/icon-dice.svg";
import Spinner from "./componets/spinners";

const Addjobs = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchAdvice = () => {
    setLoading(true); // Set loading to true before fetching data
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response
        setRecords([data.slip]); // Assuming the API returns an object with a `slip` property
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false if there's an error
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section className="bg-custom-bg h-screen flex justify-center items-center">
      <div className="bg-customary-bg h-64 w-128 rounded-lg shadow-2xl p-6 relative">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          records.map((list, index) => (
            <div key={index}>
              <p className="text-customary-lg mt-4 flex justify-center items-center tracking-widest">
                Advise #{list.id}
              </p>
              <div className="text-color mt-4 flex items-center text-2xl text-center justify-center">
                <div className="relative inline-block mx-2">
                  <h1 className="inline-block mx-2">{list.advice}</h1>
                </div>
              </div>
              <div className="flex items-center text-center justify-center mt-4 ">
                <img
                  src={desktop}
                  alt="desktop divider"
                  className="w-[300px] "
                />
              </div>
              <button
                className="absolute top-[91%] left-1/2 transform -translate-x-1/2 bg-customary-lg w-144 h-142 flex justify-center items-center text-center rounded-full"
                onClick={fetchAdvice}>
                <img src={icon} alt="desktop divider" className="w-[20px] " />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Addjobs;

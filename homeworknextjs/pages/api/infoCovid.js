import React, { useEffect, useState } from "react";
import axios from "axios";
const InfoCovid = () => {
  const [list, setList] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(
        `https://api.covid19api.com/total/country/vietnam`
      );
      for (
        let i = responsive.data.length - 1;
        i >= responsive.data.length - 10;
        i--
      ) {
        list.push(responsive.data[i]);
        setList([...list]);
      }
    };
    fetchData();
  }, []);

  console.log(list.length);
  return (
    <div>
      {/* <ul>
        {list.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default InfoCovid;

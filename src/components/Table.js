import React from "react";
import SectionName from "./SectionName";
import SectionTraffic from "./SectionTraffic";
import SectionResults from "./SectionResults";
import SectionData from "./SectionData";
import { useSelector } from "react-redux";

function Table() {
  const data = useSelector((state) => state.data.data);

  return (
    <div>
      <SectionTraffic />
      <SectionName />
      <SectionResults />
      {data.map((data) => {
        return <SectionData data={data} key={data.id} />;
      })}
    </div>
  );
}

export default Table;

import React from "react";

function SectionResults() {
  return (
    <div className="d-flex">
      <div className="block-name block-color">Итоги</div>
      <div className="block-final block-color">
        <ul>
          <li className="show">327 872</li>
          <li>6 889</li>
          <li className="session">5 325</li>
          <li className="ctr">2.1</li>
          <li>11.06</li>
          <li className="d-flex">76 195</li>
        </ul>
      </div>
      <div className="block-cpa block-color">
        <ul>
          <li>
            <a href="#">1 047.93</a>
          </li>
          <li>72...</li>
          <li>2 150 9...</li>
        </ul>
      </div>
      <div className="block-GA block-color">
        <ul>
          <li>89</li>
          <li>85...</li>
          <li>1...</li>
        </ul>
      </div>
    </div>
  );
}

export default SectionResults;

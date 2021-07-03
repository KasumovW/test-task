import React, { useState } from "react";
import SectionNested from "./SectionNested";

function SectionData(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="d-flex">
        <div className="d-flex block-data">
          {props.data.group && (
            <div
              className="block-plus"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "-" : "+"}
            </div>
          )}
          <div className="d-flex fixed">
            <div className="block-img-user">
              <img src={props.data.logo} alt="img" className="img" />
            </div>
            <div className="block-groupName">
              <div className="block-group-name">{props.data.name}</div>
              <div className="block-group">{props.data.collapsed}</div>
            </div>
          </div>
        </div>
        <div className="block-final">
          <ul>
            <li className="show">{props.data.impressions}</li>
            <li>{props.data.clicks}</li>
            <li className="session">{props.data.sessions}</li>
            <li className="ctr">{props.data.ctr}</li>
            <li>{props.data.priceClick}</li>
            <li className="d-flex">{props.data.expenses}</li>
          </ul>
        </div>
        <div className="block-cpa">
          <ul>
            <li>
              <a href="#">{props.data.value1}</a>
            </li>
            <li>{props.data.cpa}</li>
            <li>{props.data.revenue}</li>
          </ul>
        </div>
        <div className="block-GA">
          <ul>
            <li>{props.data.value2}</li>
            <li>{props.data.cpf}</li>
            <li>{props.data.cr}</li>
          </ul>
        </div>
      </div>
      {show
        ? props.data.group?.map((item) => {
            return <SectionNested item={item} />;
          })
        : ""}
    </>
  );
}

export default SectionData;

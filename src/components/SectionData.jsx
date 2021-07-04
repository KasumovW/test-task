import React, { useState } from "react";
import SectionNested from "./SectionNested";
import PropTypes from "prop-types";

function SectionData({ data }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="d-flex">
        <div className="d-flex block-data justify">
          {data.group && (
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
              <img src={data.logo} alt="img" className="img" />
            </div>
            <div className="block-groupName">
              <div className="block-group-name">{data.name}</div>
              <div className="block-group">{data.collapsed}</div>
            </div>
          </div>
          {data.online && <div className="online"></div>}
        </div>
        <div className="block-final">
          <ul>
            <li className="show">{data.impressions}</li>
            <li>{data.clicks}</li>
            <li className="session">{data.sessions}</li>
            <li className="ctr">{data.ctr}</li>
            <li>{data.priceClick}</li>
            <li className="d-flex">{data.expenses}</li>
          </ul>
        </div>
        <div className="block-cpa">
          <ul>
            <li>
              <a href="#">{data.value1}</a>
            </li>
            <li>{data.cpa}</li>
            <li>{data.revenue}</li>
          </ul>
        </div>
        <div className="block-GA">
          <ul>
            <li>{data.value2}</li>
            <li>{data.cpf}</li>
            <li>{data.cr}</li>
          </ul>
        </div>
      </div>
      {show
        ? data.group?.map((item) => {
            return <SectionNested item={item} key={data.id} />;
          })
        : ""}
    </>
  );
}

SectionData.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SectionData;

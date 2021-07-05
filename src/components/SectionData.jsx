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
        <div className="block-final d-flex justify">
          <div className="block-call">{data.impressions}</div>
          <div className="block-call">{data.clicks}</div>
          <div className="block-call">{data.sessions}</div>
          <div className="block-call">{data.ctr}</div>
          <div className="block-call">{data.priceClick}</div>
          <div className="block-call">{data.expenses}</div>
        </div>
        <div className="block-cpa d-flex justify">
          <div className="block-call">{data.value1}</div>
          <div className="block-call">{data.cpa}</div>
          <div className="block-call">{data.revenue}</div>
        </div>
        <div className="block-GA d-flex justify">
          <div className="block-call">{data.value2}</div>
          <div className="block-call">{data.cpf}</div>
          <div className="block-call">{data.cr}</div>
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

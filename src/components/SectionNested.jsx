import React from "react";
import PropTypes from "prop-types";

function SectionNested({ item }) {
  return (
    <div className="transformation">
      <div className="d-flex">
        <div className="d-flex block-data">
          <div className="d-flex fixed">
            <div className="block-img-user">
              <img src={item.logo} alt="img" className="img" />
            </div>
            <div className="block-groupName">
              <div className="block-group-name">{item.name}</div>
              <div className="block-group">{}</div>
            </div>
          </div>
        </div>
        <div className="block-final d-flex justify">
          <div className="block-call">{item.impressions}</div>
          <div className="block-call">{item.clicks}</div>
          <div className="block-call">{item.sessions}</div>
          <div className="block-call">{item.ctr}</div>
          <div className="block-call">{item.priceClick}</div>
          <div className="block-call">{item.expenses}</div>
        </div>
        <div className="block-cpa d-flex justify">
          <div className="block-call">{item.value1}</div>
          <div className="block-call">{item.cpa}</div>
          <div className="block-call">{item.revenue}</div>
        </div>
        <div className="block-GA d-flex justify">
          <div className="block-call">{item.value2}</div>
          <div className="block-call">{item.cpf}</div>
          <div className="block-call">{item.cr}</div>
        </div>
      </div>
    </div>
  );
}

SectionNested.prototype = {
  item: PropTypes.object.isRequired,
};

export default SectionNested;

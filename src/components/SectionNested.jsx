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
        <div className="block-final">
          <ul>
            <li className="show">{item.impressions}</li>
            <li>{item.clicks}</li>
            <li className="session">{item.sessions}</li>
            <li className="ctr">{item.ctr}</li>
            <li>{item.priceClick}</li>
            <li className="d-flex">{item.expenses}</li>
          </ul>
        </div>
        <div className="block-cpa">
          <ul>
            <li>
              <a href="#">{item.value1}</a>
            </li>
            <li>{item.cpa}</li>
            <li>{item.revenue}</li>
          </ul>
        </div>
        <div className="block-GA">
          <ul>
            <li>{item.value2}</li>
            <li>{item.cpf}</li>
            <li>{item.cr}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

SectionNested.prototype = {
  item: PropTypes.object.isRequired,
};

export default SectionNested;

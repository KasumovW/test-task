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
          <table align="center">
            <tr>
              <td>
                <div className="block-call">
                  <div className="block-call">{item.impressions}</div>
                </div>
              </td>
              <td>
                <div className="block-call">
                  <div className="block-call">{item.clicks}</div>
                </div>
              </td>
              <td>
                <div className="block-call">
                  <div className="block-call">{item.sessions}</div>
                </div>
              </td>
              <td>
                <div className="block-call">
                  <div className="block-call">{item.ctr}</div>
                </div>
              </td>
              <td>
                <div className="block-call">
                  <div className="block-call">{item.priceClick}</div>
                </div>
              </td>
              <td>
                <div className="block-call">
                  <div className="block-call">{item.expenses}</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="block-cpa">
          <table align="center">
            <tr>
              <td>
                <div className="block-call">{item.value1}</div>
              </td>
              <td>
                <div className="block-call">{item.cpa}</div>
              </td>
              <td>
                <div className="block-call">{item.revenue}</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="block-GA">
          <table align="center">
            <tr>
              <td>
                <div className="block-call-two">{item.value2}</div>
              </td>
              <td>
                <div className="block-call-two">{item.cpf}</div>
              </td>
              <td>
                <div className="block-call-two">{item.cr}</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

SectionNested.prototype = {
  item: PropTypes.object.isRequired,
};

export default SectionNested;

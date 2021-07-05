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
        <div className="block-final d-flex">
          <table align="center">
            <tr>
              <td>
                <div className="block-call">{data.impressions}</div>
              </td>
              <td>
                <div className="block-call">{data.clicks}</div>
              </td>
              <td>
                <div className="block-call">{data.sessions}</div>
              </td>
              <td>
                <div className="block-call">{data.ctr}</div>
              </td>
              <td>
                <div className="block-call">{data.priceClick}</div>
              </td>
              <td>
                <div className="block-call">{data.expenses}</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="block-cpa">
          <table align="center">
            <tr>
              <td>
                <div className="block-call">
                  <a href="#">{data.value1}</a>
                </div>
              </td>
              <td>
                <div className="block-call">{data.cpa}</div>
              </td>
              <td>
                <div className="block-call">{data.revenue}</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="block-GA">
          <table align="center">
            <tr>
              <td>
                <div className="block-call-two">{data.value2}</div>
              </td>
              <td>
                <div className="block-call-two">{data.cpf}</div>
              </td>
              <td>
                <div className="block-call-two">{data.cr}</div>
              </td>
            </tr>
          </table>
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

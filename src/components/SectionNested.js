import React from "react";

function SectionNested(props) {
  return (
    <div className='transformation'>
      <div className="d-flex">
        <div className="d-flex block-data">
          <div className="d-flex fixed">
            <div className="block-img-user">
              <img src={props.item.logo} alt="img" className="img" />
            </div>
            <div className="block-groupName">
              <div className="block-group-name">{props.item.name}</div>
              <div className="block-group">{}</div>
            </div>
          </div>
        </div>
        <div className="block-final">
          <ul>
            <li className="show">{props.item.impressions}</li>
            <li>{props.item.clicks}</li>
            <li className="session">{props.item.sessions}</li>
            <li className="ctr">{props.item.ctr}</li>
            <li>{props.item.priceClick}</li>
            <li className="d-flex">{props.item.expenses}</li>
          </ul>
        </div>
        <div className="block-cpa">
          <ul>
            <li>
              <a href="#">{props.item.value1}</a>
            </li>
            <li>{props.item.cpa}</li>
            <li>{props.item.revenue}</li>
          </ul>
        </div>
        <div className="block-GA">
          <ul>
            <li>{props.item.value2}</li>
            <li>{props.item.cpf}</li>
            <li>{props.item.cr}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionNested;

import React from 'react';

function Section(props) {
  return (
    <>
      <tr>
        <td>
          <div className="pr">
            {props.item.group ? <div className="btn-plus">+</div> : <div className="btn-plus"> </div>}
            <div className="img-violet">
              <img
                className="violet"
                src={props.item.logo}
                alt="Img"
              />
            </div>
            <div className="block-group1">
              <div className="tr">{props.item.name}</div>
              <div className="group1">
                {props.item.group?.sum}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex justify">
            <div className="first">{props.item.impressions}</div>
            <div>{props.item.clicks}</div>
            <div>{props.item.sessions}</div>
            <div>{props.item.ctr}</div>
            <div>{props.item.priceClick}</div>
            <div className="last">{props.item.expenses}</div>
          </div>
        </td>
        <td>
          <div className="d-flex justify">
            <div className="first">
              <a href="#">{props.item.value1}</a>
            </div>
            <div>{props.item.cpa}</div>
            <div className="last">{props.item.revenue}</div>
          </div>
        </td>
        <td>
          <div className="d-flex justify">
            <div className="first">{props.item.value2}</div>
            <div>{props.item.cpf}</div>
            <div className="last">{props.item.cr}</div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Section;
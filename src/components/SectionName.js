import React from "react";

function SectionName() {
  return (
    <div className="d-flex">
      <div className="block-name">Название</div>
      <div className="block-ul">
        <ul>
          <li className="show">
            Показы <i className="fas fa-question-circle"></i>
          </li>
          <li>Клики</li>
          <li className="session">
            Сеансы <i className="fas fa-arrow-down"></i>
          </li>
          <li className="ctr">
            CTR,% <i className="fas fa-question-circle"></i>
          </li>
          <li>Цена клика</li>
          <li className="d-flex">
            <div>
              <div>Затраты</div>
              <div className="settings">
                Настроить <i className="fas fa-question-circle"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="block-cpa">
        <ul>
          <li>Кол-во</li>
          <li>СРА</li>
          <li>Выручка</li>
        </ul>
      </div>
      <div className="block-GA">
        <ul>
          <li>Кол-во</li>
          <li>СРА</li>
          <li>CR,%</li>
        </ul>
      </div>
    </div>
  );
}

export default SectionName;

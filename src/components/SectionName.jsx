import React from "react";

function SectionName() {
  return (
    <div className="d-flex">
      <div className="block-name">Название</div>
      <div className="block-ul">
        <table align="center">
          <tr>
            <td>
              <div className="block-call-three">
                Показы <i className="fas fa-question-circle"></i>
              </div>
            </td>
            <td>
              <div className="block-call-three">Клики</div>
            </td>
            <td>
              <div className="block-call-three">
                {" "}
                Сеансы <i className="fas fa-arrow-down"></i>
              </div>
            </td>
            <td>
              <div className="block-call-three">
                CTR,% <i className="fas fa-question-circle"></i>
              </div>
            </td>
            <td>
              <div className="block-call-three">Цена клика</div>
            </td>
            <td>
              <div className="block-call-three">
                <div>
                  <div>Затраты</div>
                  <div className="settings">
                    Настроить <i className="fas fa-question-circle"></i>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="block-cpa">
        <table align="center">
          <tr>
            <td>
              <div className="block-call">Кол-во</div>
            </td>
            <td>
              <div className="block-call">СРА</div>
            </td>
            <td>
              <div className="block-call">Выручка</div>
            </td>
          </tr>
        </table>
      </div>
      <div className="block-GA">
        <table align="center">
          <tr>
            <td>
              <div className="block-call-two">Кол-во</div>
            </td>
            <td>
              <div className="block-call-two">СРА</div>
            </td>
            <td>
              <div className="block-call-two">CR,%</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SectionName;

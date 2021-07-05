import React from "react";

function SectionResults() {
  return (
    <div className="d-flex">
      <div className="block-name block-color">Итоги</div>
      <div className="block-final block-color">
        <table align="center">
          <tr>
            <td>
              <div className="block-call">327872</div>
            </td>
            <td>
              <div className="block-call">6889</div>
            </td>
            <td>
              <div className="block-call">5325</div>
            </td>
            <td>
              <div className="block-call">2.1</div>
            </td>
            <td>
              <div className="block-call">11.06</div>
            </td>
            <td>
              <div className="block-call">76195</div>
            </td>
          </tr>
        </table>
      </div>
      <div className="block-cpa block-color">
        <table align="center">
          <tr>
            <td>
              <div className="block-call">
                <a href="#">1047.93</a>
              </div>
            </td>
            <td>
              <div className="block-call">72...</div>
            </td>
            <td>
              <div className="block-call">21509...</div>
            </td>
          </tr>
        </table>
      </div>
      <div className="block-GA block-color">
        <table align="center">
          <tr>
            <td>
              <div className="block-call-two">89</div>
            </td>
            <td>
              <div className="block-call-two">85...</div>
            </td>
            <td>
              <div className="block-call-two">1...</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SectionResults;

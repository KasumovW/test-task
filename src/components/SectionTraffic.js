import React from "react";
import Nine from "./assets/nine.png";
import Ten from "./assets/ten.png";
import Eleven from "./assets/eleven.png";
import Tvelv from "./assets/tvelv.png";

function Section() {
  return (
    <div className="d-flex">
      <div className="red-text">Источники трафика</div>
      <div className="d-flex block-traffic">
        <div className="traffic">Трафик</div>
        <div className="block-icons">
          <div className="icons-1">
            <i className="fas fa-cog"></i>
          </div>
          <div className='icons-1'>
            <i className="fas fa-question-circle"></i>
          </div>
        </div>
      </div>
      <div className="d-flex block-price">
        <div>
          <div className="d-flex">
            <div className="block-img-nine">
              <img src={Nine} alt="Img" className="img" />
            </div>
            <div className="price">Продажи</div>
          </div>
          <div className="d-flex">
            <div className="block-img-ten">
              <img src={Ten} alt="Img" className="img" />
            </div>
            <div className="model">Линейная модель</div>
          </div>
        </div>
        <div className="block-icons">
          <div className="icons-1">
            <i className="fas fa-cog"></i>
          </div>
          <div>
            <i className="fas fa-question-circle"></i>
          </div>
        </div>
      </div>
      <div className="d-flex block-GA">
        <div>
          <div className="d-flex">
            <div className="block-img-eleven">
              <img src={Eleven} alt="Img" className="img" />
            </div>
            <div className="price">Цель с осн. GA</div>
          </div>
          <div className="d-flex">
            <div className="block-img-tvelv">
              <img src={Tvelv} alt="Img" className="img" />
            </div>
            <div className="model">Составная цель</div>
          </div>
        </div>
        <div className="block-icons">
          <div className="icons-1">
            <i className="fas fa-cog"></i>
          </div>
          <div>
            <i className="fas fa-question-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

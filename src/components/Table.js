import React, { useState } from "react";
import One from './assets/one.ico';
import Two from './assets/two.ico';
import Three from './assets/three.ico';
import Four from './assets/four.png';
import Five from './assets/five.ico';
import Six from './assets/six.ico';
import Seven from './assets/seven.ico';
import Eight from './assets/eight.ico';
import Nine from './assets/nine.png';
import Ten from './assets/ten.png';
import Eleven from './assets/eleven.png';
import Tvelv from './assets/tvelv.png';
import { useSelector } from 'react-redux';
import Section from './Section';


function Table() {
  const data = useSelector(state => state.data.data);

  return (
    <div>
      <table border="1" className="table-head">
        <thead>
          <tr>
            <td className="red-text" width='250'>Источники трафика</td>
            <td className="" width='550'>
              <div className="d-flex justify">
                <div className="red-text2">Трафик</div>
                <div className="block-icon">
                  <div className="icon-one">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="icon-two">
                    <i className="fas fa-question-circle"></i>
                  </div>
                </div>
              </div>
            </td>
            <td className="" width='250'>
              <div className="d-flex justify">
                <div>
                  <div className="d-flex">
                    <div className="block-crm">
                      <img
                        src={Nine}
                        alt="Img"
                        className="img-crm"
                      />
                    </div>
                    <div className="red-text3">Продажи</div>
                  </div>
                  <div className="d-flex a1">
                    <div className="block-col">
                      <img
                        src={Ten}
                        alt="Img"
                        className="img-col"
                      />
                    </div>
                    <div className="line-model">Линейная модель</div>
                  </div>
                </div>
                <div className="block-icon">
                  <div className="icon-one">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="icon-two">
                    <i className="fas fa-question-circle"></i>
                  </div>
                </div>
              </div>
            </td>
            <td className="" width='175'>
              <div className="d-flex justify">
                <div>
                  <div className="d-flex head-block-gear">
                    <div className="block-gear">
                      <img
                        src={Eleven}
                        alt="img"
                        className="img-gear"
                      />
                    </div>
                    <div className="red-text4">Цель с осн. GA</div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div className="block-box">
                        <img
                          src={Tvelv}
                          alt="Img"
                          className="img-box"
                        />
                      </div>
                      <div className="line-model">Состованая часть</div>
                    </div>
                  </div>
                </div>
                <div className="block-icon3">
                  <div className="icon-one">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="icon-two">
                    <i className="fas fa-question-circle"></i>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="title-one">Название</td>
            <td className="">
              <div className="d-flex justify">
                <div className="block-padding first">
                  Показы <i className="fas fa-question-circle"></i>
                </div>
                <div className="block-padding">Клики</div>
                <div className="block-padding">
                  Сеансы <i className="fas fa-arrow-down"></i>
                </div>
                <div className="block-padding">
                  CTR,% <i className="fas fa-question-circle"></i>
                </div>
                <div className="block-padding">Цена клика</div>
                <div className="block-padding last">
                  <div>
                    <div>Затраты</div>
                    <div className="d-flex">
                      <div className="link-one">настроить</div>
                      <i className="fas fa-question-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="">
              <div className="d-flex">
                <div className="col-vo">Кол-во</div>
                <div className="col-vo">СРА</div>
                <div className="col-vo">Выручка</div>
              </div>
            </td>
            <td className="">
              <div className="d-flex">
                <div className="col-vo">Кол-во</div>
                <div className="col-vo">СРФ</div>
                <div className="col-vo">CR,%</div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="title-one bg-color">Итоги</td>
            <td className="bg-color">
              <div className="d-flex justify">
                <div className="first">327 872</div>
                <div>6 889</div>
                <div>5 325</div>
                <div>2.1</div>
                <div>11.06</div>
                <div className="last">76 195</div>
              </div>
            </td>
            <td className="bg-color">
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">1 047.93</a>
                </div>
                <div>72...</div>
                <div className="last">1 150 9...</div>
              </div>
            </td>
            <td className="bg-color">
              <div className="d-flex justify">
                <div className="first">89</div>
                <div>85...</div>
                <div className="last">1...</div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
        {data.map(item => {
          return(
            <Section item={item} key={item.id}/>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

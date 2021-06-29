import React from "react";
import One from './assets/one.ico';
import Two from './assets/two.ico';
import Three from './assets/three.ico';
import Four from './assets/four.png';
import Five from './assets/five.ico';
import Six from './assets/six.ico';
import Seven from './assets/seven.ico';
import Eight from './assets/eight.ico';

function Table() {
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
                        src="https://testing1.alytics.ru/images/multichannel/crm.png"
                        alt="Img"
                        className="img-crm"
                      />
                    </div>
                    <div className="red-text3">Продажи</div>
                  </div>
                  <div className="d-flex a1">
                    <div className="block-col">
                      <img
                        src="https://testing1.alytics.ru/images/goal_models/png/model_linear.png"
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
                  <div className="d-flex">
                    <div className="block-gear">
                      <img
                        src="https://testing1.alytics.ru/images/multichannel/composite.png"
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
                          src="https://testing1.alytics.ru/images/goal_models/png/composite.png"
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
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus">+</div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={One}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr">Пр тр</div>
                  <div className="group1">Группа. Источников 1</div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>1 716</div>
                <div>1 716</div>
                <div>-</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">344.54</a>
                </div>
                <div>0</div>
                <div className="last">677 870...</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">29</div>
                <div>0</div>
                <div className="last">1...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify">
                <div className="pr">
                  <div className="btn-plus"></div>
                  <div className="img-violet">
                    <img
                      className="violet"
                      src={Two}
                      alt="Img"
                    />
                  </div>
                  <div className="block-group1">
                    <div className="tr">Яндекс Директ</div>
                    <div className="group1">Платная реклама</div>
                  </div>
                </div>
                <div className="online"> </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">299 571</div>
                <div>843</div>
                <div>1 388</div>
                <div>0.28</div>
                <div>35.9</div>
                <div className="last">30 266</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">181.64</a>
                </div>
                <div>16...</div>
                <div className="last">423 713...</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">28</div>
                <div>1 ...</div>
                <div className="last">3...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus">+</div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={Three}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr">Органический поиск</div>
                  <div className="group1">Группа. Источников 7</div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>1 370</div>
                <div>1 370</div>
                <div>-</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">332.41</a>
                </div>
                <div>0</div>
                <div className="last">648 828...</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">14</div>
                <div>0</div>
                <div className="last">1...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify">
                <div className="pr">
                  <div className="btn-plus"> </div>
                  <div className="img-violet">
                    <img
                      className="violet"
                      src={Four}
                      alt="Img"
                    />
                  </div>
                  <div className="block-group1">
                    <div className="tr">Google Ads</div>
                    <div className="group1">Платная реклама</div>
                  </div>
                </div>
                <div className="online"> </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">5 272</div>
                <div>252</div>
                <div>449</div>
                <div>4.78</div>
                <div>58.77</div>
                <div className="last">14 809</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">107.13</a>
                </div>
                <div>13...</div>
                <div className="last">242 913...</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">10</div>
                <div>1</div>
                <div className="last">3...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus">+</div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={Five}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr">Переходы с сайтов</div>
                  <div className="group1">Группа. Источников 77</div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>220</div>
                <div>220</div>
                <div>-</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">55.11</a>
                </div>
                <div>0</div>
                <div className="last">109 487...</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">4</div>
                <div>0</div>
                <div className="last">1...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus">-</div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={Six}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr">Email-рассылки</div>
                  <div className="group1">Группа. Источников 5</div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>84</div>
                <div>84</div>
                <div>-</div>
                <div>75</div>
                <div className="last">6 300</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">15.4</a>
                </div>
                <div>40...</div>
                <div className="last">29 021.45</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">2</div>
                <div>3 ...</div>
                <div className="last">2...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus"> </div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={Six}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr e-mail">e-mail / e-mail</div>
                  <div className="group1"> </div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>81</div>
                <div>81</div>
                <div>-</div>
                <div>39.51</div>
                <div className="last">3 200</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">
                  <a href="#">15.21</a>
                </div>
                <div>21...</div>
                <div className="last">28 614.4</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">2</div>
                <div>1 ...</div>
                <div className="last">2...</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus"> </div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={Seven}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr e-mail">getresponse / email</div>
                  <div className="group1"> </div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>1</div>
                <div>1</div>
                <div>-</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">0</div>
                <div>0</div>
                <div className="last">407.05</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">0</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="pr">
                <div className="btn-plus"> </div>
                <div className="img-violet">
                  <img
                    className="violet"
                    src={Eight}
                    alt="Img"
                  />
                </div>
                <div className="block-group1">
                  <div className="tr e-mail">cm / email</div>
                  <div className="group1"> </div>
                </div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">-</div>
                <div>0</div>
                <div>0</div>
                <div>-</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">0</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
            <td>
              <div className="d-flex justify">
                <div className="first">0</div>
                <div>0</div>
                <div className="last">0</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

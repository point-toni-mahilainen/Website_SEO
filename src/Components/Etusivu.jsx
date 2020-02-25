import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Lounaslista from './Lounaslista';

class Etusivu extends Component {
    lunchlistSizeUp() {
        let lunchDiv = document.getElementById("lunchListWrapper");
        let lunchList = document.getElementById("tblLunchList");
        let verticalText = document.getElementById("verticalText");

        lunchDiv.classList.remove("smallLunchList");
        lunchDiv.classList.add("largeLunchList");

        verticalText.classList.remove("visibleText");
        verticalText.classList.add("hiddenText");

        lunchList.classList.remove("hiddenLunchlist");
        lunchList.classList.add("visibleLunchlist");

    }

    lunchlistSizeDown() {
        let lunchDiv = document.getElementById("lunchListWrapper");
        let lunchList = document.getElementById("tblLunchList");
        let verticalText = document.getElementById("verticalText");

        lunchList.classList.remove("visibleLunchlist");
        lunchList.classList.add("hiddenLunchlist");

        setTimeout(
            function () {
                lunchDiv.classList.remove("largeLunchList");
                lunchDiv.classList.add("smallLunchList");
            }
            , 700);

        setTimeout(
            function () {
                verticalText.classList.remove("hiddenText");
                verticalText.classList.add("visibleText");
            }
            , 1700);
    }

    render() {
        return (
            <main id="mainpage">
                <section id="mainpageLeft">
                    <div id="mainpageHeagerWrapper">
                        <div className="mainpageHeader">
                            <h1>Tervetuloa SEO Kosken kotisivuille</h1>
                        </div>
                    </div>
                    <div className="mainpageLunchDiv">
                        <div id="lunchListWrapper" onMouseEnter={this.lunchlistSizeUp} onMouseLeave={this.lunchlistSizeDown}>
                            <Lounaslista />
                        </div>
                        <h4 id="verticalText">LOUNASLISTA</h4>
                    </div>
                </section>
                <section id="mainpageRight">
                    <div id="infoSide">
                        <Container bsPrefix="InfoContainer">
                            <Row>
                                <Col>
                                    <h4>Aukioloajat</h4>
                                    <h5>SEO Koski</h5>
                                    <ul>
                                        <li>Maanantai - Perjantai</li>
                                        <li className="listTimes">06.00 - 19.00</li>
                                        <li>Lauantai</li>
                                        <li className="listTimes">08.00 - 16.00</li>
                                        <li>Sunnuntai</li>
                                        <li className="listTimes">09.00 - 16.00</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>SEO Palikkala</h5>
                                    <ul>
                                        <li>Maanantai - Perjantai</li>
                                        <li className="listTimes">07.30 - 16.00</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <h4>Yhteystiedot</h4>
                                    <address>
                                        Kosken Autohuolto Oy <br />
                                        Hämeentie 2  <br />
                                        31500, Koski TL <br />
                                        info@koskenseo.fi <br />
                                        (02) 4841 625 (kahvila) <br />
                                        (02) 4841 690 (huolto) <br />
                                        (02) 4846 266 (kahvila / Palikkala)
                            </address>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </main>
        );
    }
}

export default Etusivu;
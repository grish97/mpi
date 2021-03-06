import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import AgileImgEn from '../../../media/images/agileDevelopment.png';
import AgileImgRu from '../../../media/images/agileDevelopment-russian.png'

import { withTranslation } from 'react-i18next';


 class Agile extends Component {

    render () {
        /**
         * Here will be keys of that images
         * Theese keys will be values of 'AGILE_IMAGE_SRC' key in translate files
         * In russian translates file will be like this => "AGILE_IMAGE_SRC" : "AGILE_IMAGE_RU",
         * In english translates file will be like this => "AGILE_IMAGE_SRC" : "AGILE_IMAGE_EN" 
         */
        const enumsForImages = {
            'AGILE_IMAGE_EN' : AgileImgEn,
            'AGILE_IMAGE_RU' : AgileImgRu
        };
        const text = `AGILE_DESCRIPTION`;
        const title = "AGILE_TITLE"; 
        const imageAlt = `AGILE_IMAGE_ALT`; 
        return (
            <section id="agile">
                <Container>
                    <h2 className="text-center">{this.props.t(title)}</h2>

                    <Row className="justify-content-between pt-5 pb-5 align-items-center">
                        <Col md={12} lg={4} className="pt-4">
                            <p>{this.props.t(text)}</p>
                        </Col>
                        <Col md={12} lg={7}>
                            <img src={enumsForImages[this.props.t('AGILE_IMAGE_SRC')]} alt={imageAlt} className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
export default withTranslation()(Agile);
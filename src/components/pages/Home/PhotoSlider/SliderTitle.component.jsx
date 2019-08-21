import React, {Component} from 'react';
import { Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';

/**
 * This Component allow only title and his description near
 * ----- TITLE -----
 * ---Description---
 */
class SliderTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const [HEADER, DESC] = [this.props.title.toUpperCase() || "", this.props.description || ""];
        return (
            <Col md={6} className="slider-container h-100 text-center mx-auto">
                <h2 className="pb-5">{this.props.t(HEADER)}</h2>
                <p>{this.props.t(DESC)}</p>
            </Col>
        );
    }
}

export default withTranslation()(SliderTitle);

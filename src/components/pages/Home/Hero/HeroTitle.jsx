import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';


class HeroTitle extends Component {
    state = {
        display : "block"
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let styleObject = {};
        if (window.scrollY <= 10) {
            styleObject['display'] = 'block';
        } else {
            styleObject['display'] = 'none';
        }
        this.setState(styleObject)
    };

    scrollToAbout () {
        const elem = document.getElementById(`about`);

        elem.scrollIntoView({ behavior : "smooth" });
    }



    render() {
        const description = window.innerWidth > 500
            ? 'HERO_TITLE_DESCRIPTION'
            : 'HERO_TITLE_DESCRIPTION_MOBILE';


        return (
            <>
                <div className="hero-main  d-flex flex-wrap">
                    <div className="heroTitle d-flex flex-wrap align-content-center">
                        <h1>{this.props.t('HERO_TITLE_HEADER')}</h1>
                        <p className="pb-1 pb-md-4" dangerouslySetInnerHTML={{ __html: this.props.t(description) }} />
                        <Link className="more" to="#" onClick={this.scrollToAbout}>{this.props.t('HERO_TITLE_MORE_BUTTON')}</Link>
                    </div>
                </div>

            </>
        );
    }
}

export default withTranslation()(HeroTitle);
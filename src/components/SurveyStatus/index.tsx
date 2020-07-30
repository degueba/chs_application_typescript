import React, { Component } from 'react';

import { connect } from 'react-redux';

// Styles scss
import './styles.scss'

// Survey json
import DataSurvey from '../../survey.json';


// Redux
import {Survey, SurveyState, SurveyTypes} from '../../store/ducks/survey/types'
import { Dispatch, bindActionCreators } from 'redux';
import * as SurveyActions from '../../store/ducks/survey/actions';


// State Props
interface StateProps {
    survey: Survey
}

interface DispatchProps {
    modifySurvey({}): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps


class SurveyStatus extends Component<Props> {
    goToSection = (name) => {
        let { questions, medication } = this.props.survey.result;

        if((name === 'checkout' && !medication) || (name === 'prescription' && (questions && questions.length < DataSurvey.length)) || (!questions)) return

        this.props.modifySurvey({...this.props.survey, ...{groupActive: {name, active: name === 'prescription' ? 'treatment': ''}}});
    }

    render(){
        let { sectionsFilled } = this.props.survey;

        return (
            <div className="surveyStatus">
                {this.props.survey && this.props.survey.groupActive.name === 'health' ? <img style={{display: "none"}} src="//hantswers-azentates.com/conversion.gif" width="1" height="1" /> : null}

                <div className={`surveyStatus__block surveyStatus__block--contact 
                ${this.props.survey && this.props.survey.groupActive.name === 'contact' ? 'active' : ''}
                ${sectionsFilled && sectionsFilled.includes('contact') ? 'filled' : ''}
                `}
                    onClick={() => this.goToSection('contact')}>
                    <h3>Contact Info</h3>
                </div>
                <div className={`surveyStatus__block surveyStatus__block--health
                    ${this.props.survey && this.props.survey.groupActive.name === 'health' ? 'active' : ''} 
                    ${sectionsFilled && sectionsFilled.includes('health') ? 'filled' : ''}
                    `}
                    onClick={() => this.goToSection('health')}>
                    <h3>Health Profile</h3>
                </div>
                <div className={`surveyStatus__block surveyStatus__block--prescription 
                    ${this.props.survey && this.props.survey.groupActive.name === 'prescription' ? 'active' : ''}
                    ${sectionsFilled && sectionsFilled.includes('prescription') ? 'filled' : ''}`}
                    onClick={() => this.goToSection('prescription')}>
                    <h3>Prescription</h3>
                </div>
                <div className={`surveyStatus__block surveyStatus__block--checkout
                    ${this.props.survey && this.props.survey.groupActive.name === 'checkout' ? 'active' : ''}
                    ${sectionsFilled && sectionsFilled.includes('checkout') ? 'filled' : ''}
                `}>
                    <h3 onClick={() => this.goToSection('checkout')}>Checkout</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SurveyActions, dispatch);

export default connect()(SurveyStatus);
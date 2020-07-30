import { Reducer } from 'redux';
import { Survey, SurveyState, SurveyTypes } from './types';

const INITIAL_STATE: SurveyState = {
    survey: {
            groupActive: {id: 1, name: 'contact'},
            questionActive: {id: 0, name: ''},
            totalQuestions: 0,
            result: {},
            sectionsFilled: []
    },
    existingSurvey: {active: false, data: []},
    loading: false
}

const reducer: Reducer<SurveyState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SurveyTypes.MODIFY_SURVEY:
            return {
                ...state, survey: action.payload
            }
        case SurveyTypes.MODIFY_EXISTING_SURVEY:
            return {
                ...state, existingSurvey: action.payload
            }
    }
}

export default reducer;
import { action } from 'typesafe-actions';

import { SurveyTypes, Survey } from './types';


export const modifySurvey = () => action(SurveyTypes.MODIFY_SURVEY);
export const modifyExistingSurvey = (payload: Survey) => action(SurveyTypes.MODIFY_EXISTING_SURVEY, { payload });


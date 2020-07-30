export enum SurveyTypes {
    MODIFY_SURVEY = '@survey/MODIFY_SURVEY',
    MODIFY_EXISTING_SURVEY = '@survey/MODIFY_EXISTING_SURVEY'
}


export interface Survey {
    groupActive: {
        id: number
        name: string
    },
    questionActive: {
        id: number
        name: string
    },
    result: {
        questions?: Array<string>,
        medication?: Array<string>
    },
    totalQuestions: number,
    sectionsFilled: any
}

export interface SurveyState {
    readonly survey: Survey
    readonly loading: boolean
    readonly existingSurvey: {active: boolean, data: any}
}
import {createSlice} from '@reduxjs/toolkit';
import {_getQuestions, _saveQuestionAnswer} from "../../../_DATA";

// Initial store 
export const initialState = {
    loading: false,
    hasErrors: false,
    questions: {},
};

// Questions slice
const slice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        addQuestion: (state, action) => {
            state.questions.unshift(action.payload); //TO-DO
        },
        getQuestionsSuccess: (state, action) => {
            state.questions = action.payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getQuestionsFailure: (state) => {
            state.loading = false;
            //handling Errors
            state.hasErrors = true;
        },
    },
});

// Actions generated from the slice
const {
    addQuestion,
    startLoading,
    getQuestionsFailure,
    getQuestionsSuccess,
} = slice.actions;

// export The reducer
export default slice.reducer;

// export user selector to get the slice in any component
export const questionsSelector = (state) => state.questions;

// Thunk Actions
export const fetchQuestions = ()=> async (dispatch) => {
    try {
        dispatch(startLoading());

        const response = await _getQuestions()

        dispatch(getQuestionsSuccess(response));

    } catch (error) {
        dispatch(getQuestionsFailure());
    }
};

export const saveQuestionAnswer = ({authedUser, qid, answer}) => async (dispatch) =>{
    try{
        _saveQuestionAnswer({authedUser, qid, answer})
        
    } catch(err){
        dispatch(getQuestionsFailure());
    }
}

export const createQuestion = (question) => async ( dispatch) => {

    try {
        dispatch(addQuestion(question));
    } catch (error) {
        dispatch(getQuestionsFailure());
    }
};
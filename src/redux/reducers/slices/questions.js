import {createSlice} from '@reduxjs/toolkit';
import {_getQuestions, _saveQuestionAnswer, _saveQuestion} from "../../../_DATA";

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
            state.questions = {...action.payload.questions, [action.payload.formattedQuestion.id]: action.payload.formattedQuestion }
            state.loading = false;
            state.hasErrors = false;
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
        dispatch(startLoading())

        _saveQuestionAnswer({authedUser, qid, answer})
        .then(()=>{
            dispatch(fetchQuestions())
        })
    } catch(err){
        dispatch(getQuestionsFailure());
    }
}

export const createQuestion = (question) => async ( dispatch) => {
    try {
        dispatch(startLoading())
        _saveQuestion(question)
        .then(res=> {
            dispatch(addQuestion(res))
        })
    } catch (error) {
        dispatch(getQuestionsFailure());
    }
};
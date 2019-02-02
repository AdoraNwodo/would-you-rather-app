import { saveQuestionAnswer, saveQuestion } from '../utils/api'

import { handleAddQuestionToUser, handleAddAnswerToUser } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, author) {
  return (dispatch) => {

    return saveQuestion({
        optionOneText, 
        optionTwoText, 
        author
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(handleAddQuestionToUser(question))
      })
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion (authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser, 
    qid, 
    answer
  }
}

export function handleAnswerQuestion (authedUser, qid, answer ) {
  return (dispatch) => {
    return saveQuestionAnswer({
      qid, 
      authedUser, 
      answer
    })
    .then(({authedUser, qid, answer}) => {
      dispatch(answerQuestion(authedUser, qid, answer))
      dispatch(handleAddAnswerToUser(authedUser, qid, answer))
    })
  }
}
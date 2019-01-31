export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function addQuestionToUser (question){
  return{
    type: ADD_QUESTION_TO_USER,
    question,
  }
}

export function handleAddQuestionToUser (info) {
  return (dispatch) => {
    dispatch(addQuestionToUser(info))
  }
}
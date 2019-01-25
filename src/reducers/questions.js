import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/tweets'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION :
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne:{
            ...state[action.qid.optionOne],
            votes: action.answer === "optionOne"
                ? state[action.qid.optionOne].votes.concat([action.authedUser])
                : state[action.qid.optionOne].votes.filter((uid) => uid !== action.authedUser)
          },
          optionTwo:{
            ...state[action.qid.optionOne],
            votes: action.answer === "optionTwo"
                ? state[action.qid.optionTwo].votes.concat([action.authedUser])
                : state[action.qid.optionTwo].votes.filter((uid) => uid !== action.authedUser)
          },
          // add answer array to user object
        }
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question,
      }
    default :
      return state
  }
}
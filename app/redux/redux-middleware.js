export const promiseDispatchWrapper = ({ dispatch }) => {
  return action => {
    if (typeof action.then === 'function') {
      return action.then(dispatch)
    }
    return dispatch;
  }
}

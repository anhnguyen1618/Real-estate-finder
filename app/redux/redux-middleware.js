export const promiseDispatchMiddleWare = ({ dispatch }) => {
  return next => action => {
    if (typeof action === 'object' && action.types && action.types.length === 2 && action.api) {
      const { types: [requestAction, receiveAction], api } = action
      dispatch(requestAction(true))
      api.then(res => {
        dispatch(requestAction(false))
        dispatch(receiveAction(res))
      })
    }
    return next(action)
  }
}

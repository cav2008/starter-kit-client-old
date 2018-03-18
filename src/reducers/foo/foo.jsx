/**
 * Reducers are used to update the store. Actions calls the correct reducers and passes the data
 * through.
 */

// Default values for the store.
const defaultState = {
  bar: 'replace_this',
};

/**
 * Reducer function to used to change and store the correct data.
 * @param {Object} state the current state object.
 * @param {Object} action the action with the data to put in the store.
 * @return {Object} returns new state to put in store.
 */
export default function foo(state = defaultState, action) {
  switch (action.type) {
    case 'BAR_SET':
      return Object.assign({}, state, {
        bar: action,
      });
    default:
      return state;
  }
}

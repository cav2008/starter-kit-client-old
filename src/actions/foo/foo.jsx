// Actions are functions that the component calls to make something change in the reducers / store.

/**
 * Actions are made from 2 parts, the function part is called 'Action creator'.
 * The 'Action' part is the return.
 * @param {String} username
 */
export default function fooSetBar(payload) {
  return {
    // Type for the reducer to put the data in the correct place.
    type: 'BAR_SET',
    // The payload.
    payload,
  };
}

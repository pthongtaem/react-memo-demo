// Actions
const SET_SHOW_ROOW = 'mobile-app/matrix/SET_SHOW_ROOW';

// Action Creators
export function setShowRoom(floor) {
  return {
    type: SET_SHOW_ROOW,
    payloads: { floor },
  };
}

// Reducer
const initialState = {
  showRoom: 'all',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_ROOW:
      const { payloads } = action;
      return { ...state, showRoom: payloads.floor };

    default:
      return state;
  }
};

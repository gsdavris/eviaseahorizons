export function modal(state, action) {
  switch (action.type) {
    case "IS_OPEN":
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
}

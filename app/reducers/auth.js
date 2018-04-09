export default function input(state = {}, action){
  switch (action.type) {
    case 'ADD_CREDITALS_TO_STORE':
      const { user: { email, password, firstName, lastName } } = action;
      return {
        ...state,
        email,
        password,
        firstName,
        lastName,
      };
    case 'RESET_CACHE':
      return {};
  }
  return state;
}

export default function input(state = {}, action){
  console.log(action.type);
  switch (action.type) {
    case 'ADD_CREDITALS_TO_STORE':
      const { uid, password } = action;
      return {
        ...state,
        uid,
        password,
      };
  }
  return state;
}

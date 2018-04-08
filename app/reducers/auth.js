export default function input(state = {}, action){
  console.log(action.type);
  switch (action.type) {
    case 'AUTORIZATION':
      const { uid, password } = action;
      return {
        ...state,
        uid,
        password,
      };
  }
  return state;
}

export default function input(state = {text: 'blaaa'}, action){
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {text:action.newText};
  }
  return state;
}

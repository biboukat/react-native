export const autorization = (uid, password) => {
  console.log(uid);
  return {
    type: 'AUTORIZATION',
    uid,
    password,
  }
}

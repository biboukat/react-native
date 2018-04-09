export const autorization = (uid, password) => {
  return {
    type: 'AUTORIZATION',
    uid,
    password,
  }
}

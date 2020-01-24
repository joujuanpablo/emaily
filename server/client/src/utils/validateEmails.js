const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default emails => {
  const invalidEmailsArr = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !re.test(email)); //want to keep the ones that fail

  if (invalidEmailsArr.length) {
    return `These emails are invalid: ${invalidEmailsArr}`;
  }
  return;
};

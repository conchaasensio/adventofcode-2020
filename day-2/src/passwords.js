function isValid(policyAndPassword) {
  const [policy, password] = policyAndPassword.split(': ');
  const [times, requiredLetter] = policy.split(' ');
  const [minimumNumberOfTimes, maximumNumberOfTimes] = times.split('-');
  let numberOfTimes = password.split(requiredLetter).length - 1;

  return (
    numberOfTimes >= minimumNumberOfTimes &&
    numberOfTimes <= maximumNumberOfTimes
  );
}

function countValidPasswords(policiesAndPasswordsAsString) {
  const policiesAndPasswords = policiesAndPasswordsAsString.split('\n');
  let validPasswords = policiesAndPasswords.filter(isValid);
  return validPasswords.length;
}

export { countValidPasswords };

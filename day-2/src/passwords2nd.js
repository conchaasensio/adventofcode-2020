function isValid(policyAndPassword) {
  const [policy, password] = policyAndPassword.split(': ');
  const [positions, requiredLetter] = policy.split(' ');
  const [firstPosition, secondPosition] = positions.split('-');
  let isInFirstPosition = password[firstPosition - 1] === requiredLetter;
  let isInSecondPosition = password[secondPosition - 1] === requiredLetter;

  return isInFirstPosition ^ isInSecondPosition; // Xor operator
}

function countValidPasswords(policiesAndPasswordsAsString) {
  const policiesAndPasswords = policiesAndPasswordsAsString.split('\n');
  let validPasswords = policiesAndPasswords.filter(isValid);
  return validPasswords.length;
}

export { countValidPasswords };

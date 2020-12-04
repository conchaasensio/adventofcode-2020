function countValidPassports(passportsAsString) {
  let passports = passportsAsString.split('\n\n');
  return passports.filter(isValidPassport).length;
}

function isValidPassport(passport) {
  return (
    includesEyeColor(passport) &&
    includesPassportId(passport) &&
    includesExpirationYear(passport) &&
    includesHairColor(passport) &&
    includesBirthYear(passport) &&
    includesIssueYear(passport) &&
    includesHeight(passport)
  );
}

function includesEyeColor(passport) {
  let match = passport.match(/ecl:([a-zA-Z]+)/);
  return (
    match &&
    ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(match[1])
  );
}

function includesPassportId(passport) {
  return passport.match(/pid:([0-9]{9})(?!\S)/);
}

function includesExpirationYear(passport) {
  let match = passport.match(/eyr:(\d+)/);

  return match && match[1] >= 2020 && match[1] <= 2030;
}

function includesHairColor(passport) {
  return passport.match(/hcl:(#[0-9a-f]{6})(?!\S)/);
}

function includesBirthYear(passport) {
  let match = passport.match(/byr:(\d+)/);

  return match && match[1] >= 1920 && match[1] <= 2002;
}

function includesIssueYear(passport) {
  let match = passport.match(/iyr:(\d+)/);

  return match && match[1] >= 2010 && match[1] <= 2020;
}

function includesHeight(passport) {
  const heightInCm = passport.match(/hgt:(\d+)cm/);
  const validHeightInCm =
    heightInCm && heightInCm[1] >= 150 && heightInCm[1] <= 193;

  const heightInIn = passport.match(/hgt:(\d+)in/);
  const validHeightInIn =
    heightInIn && heightInIn[1] >= 59 && heightInIn[1] <= 76;

  return validHeightInCm || validHeightInIn;
}

export { countValidPassports };

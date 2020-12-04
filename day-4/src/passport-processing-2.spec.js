import { countValidPassports } from './passport-processing-2';

describe('valid passports', () => {
  test('sample valid passport', () => {
    let passport =
      'ecl:gry pid:060033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('Hair color can be at the end of the string', () => {
    let passport =
      'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\n' +
      'hcl:#623a2f';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('Passport Id can be at the end of the string', () => {
    let passport =
      'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('birth year should be at least 1920', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1920 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('birth year should be up to 2002', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:2002 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('should have Issue year at least 2010', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1920 iyr:2010 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('should have Issue year up to 2020', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:2002 iyr:2020 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('should have Height greater at least 60in', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:60in';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('missing Country id (cid)', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('Hair color can have numbers from 0 to 5', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#012345\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  test('Hair color can have numbers from 6 to 9', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#6789ab\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(1);
  });

  describe('Valid eyes colors', () => {
    ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].forEach((color) => {
      test(`${color}`, () => {
        let passport =
          `ecl:${color} pid:860033327 eyr:2020 hcl:#fffffd\n` +
          'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(1);
      });
    });
  });
});
describe('Is invalid passport when', () => {
  test('missing Eye Color (ecl)', () => {
    let passport =
      'pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('missing Passport ID (pid)', () => {
    let passport =
      'ecl:gry eyr:2020 hcl:#fffffd\n' + 'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('missing Expiration Year (eyr)', () => {
    let passport =
      'ecl:gry pid:860033327 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('missing Hair Color (hcl)', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('missing Birth Year (byr)', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('missing Issue Year (iyr)', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('missing Height (hgt)', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Birth Year is greater than 2002', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:2003 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Birth Year is smaller than 1920', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1919 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Issuer Year is greater than 2020', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2021 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Issuer Year is smaller than 2010', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2009 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Height is smaller than 150cm', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:149cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Height is greater than 193', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:194cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Height is smaller than 59in', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:58in';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Height is greater than 76in', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:77in';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Hair Color has no #', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:ffffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Hair Color has less than 6 characters', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffff\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Hair Color has more than 6 characters', () => {
    let passport =
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffff\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  describe('invalid eyes colors', () => {
    ['marron', 'azul', 'gris', 'verde'].forEach((color) => {
      test(`${color}`, () => {
        let passport =
          `ecl:${color} pid:860033327 eyr:2020 hcl:#fffffd\n` +
          'byr:1937 iyr:2017 cid:147 hgt:183cm';
        expect(countValidPassports(passport)).toBe(0);
      });
    });
  });

  test('Passport Id with less than 9 digits', () => {
    let passport =
      'ecl:gry pid:86003332 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });

  test('Passport Id with more than 9 digits', () => {
    let passport =
      'ecl:gry pid:8600333223 eyr:2020 hcl:#fffffd\n' +
      'byr:1937 iyr:2017 cid:147 hgt:183cm';
    expect(countValidPassports(passport)).toBe(0);
  });
});

describe('multiple passports', () => {
  test('invalid passports', () => {
    let passport =
      'eyr:1972 cid:100\n' +
      'hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926\n' +
      '\n' +
      'iyr:2019\n' +
      'hcl:#602927 eyr:1967 hgt:170cm\n' +
      'ecl:grn pid:012533040 byr:1946\n' +
      '\n' +
      'hcl:dab227 iyr:2012\n' +
      'ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277\n' +
      '\n' +
      'hgt:59cm ecl:zzz\n' +
      'eyr:2038 hcl:74454a iyr:2023\n' +
      'pid:3556412378 byr:2007';

    expect(countValidPassports(passport)).toBe(0);
  });

  test('valid passports', () => {
    let passport =
      'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\n' +
      'hcl:#623a2f\n' +
      '\n' +
      'eyr:2029 ecl:blu cid:129 byr:1989\n' +
      'iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm\n' +
      '\n' +
      'hcl:#888785\n' +
      'hgt:164cm byr:2001 iyr:2015 cid:88\n' +
      'pid:545766238 ecl:hzl\n' +
      'eyr:2022\n' +
      '\n' +
      'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719';

    expect(countValidPassports(passport)).toBe(4);
  });
});

describe('solutions', () => {
  test('second part', () => {
    const fs = require('fs');
    const passports = fs.readFileSync('input.txt', 'utf8');

    expect(countValidPassports(passports)).toBe(121);
  });
});

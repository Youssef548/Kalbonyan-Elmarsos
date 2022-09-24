// students score , total possible score
// 15/20 -> You got a C (75%)!
// A 90-100 , b 80-89, C 70-79, D 60-69, f 0-59

const gradeCalc = function (score, totalScore) {
  if (typeof score === 'number' || typeof totalScore === 'number') {
    const percent = (score / totalScore) * 100;
    let letterGrade = '';
    if (percent >= 90) {
      letterGrade = 'A';
    } else if (percent >= 80) {
      letterGrade = 'B';
    } else if (percent >= 70) {
      letterGrade = 'C';
    } else if (percent >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }
    return `You got a ${letterGrade} (${percent}%)!`;
  } else {
    throw Error('Only Can Calc numbers');
  }
};

try {
  const result = gradeCalc(116, 155);
  console.log(result);
} catch (e) {
  console.log(e.message);
}

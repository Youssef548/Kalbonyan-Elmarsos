// students score , total possible score
// 15/20 -> You got a C (75%)!
// A 90-100 , b 80-89, C 70-79, D 60-69, f 0-59

let gradeCalc = function (score, totalScore) {
  const percent = (score / totalScore) * 100;
  const letterGrade = "";
  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} (${percent}%)!`;
};

const result = gradeCalc(5, 20);

console.log(result);

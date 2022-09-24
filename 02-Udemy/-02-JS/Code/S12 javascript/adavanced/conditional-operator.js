// const myAge = 27;
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';
// console.log(message);

const myAge = 27;
const showPage = () => {
  return 'Showing the page';
};

const showErrorPage = () => {
  return 'Showing the error page';
};

const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ['Tyler', 'Porter'];
// 1. Print"Team size:3"if less than or equal to 4
// 2. Print"Too many people on your team"otherwise

console.log(
  team.length <= 4 ? `Team Size ${team.length}` : 'Too many people on your team'
);

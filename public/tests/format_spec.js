// var formattedProblems = [];

// learnjs.problems.forEach(function (probem) {
//   formattedProblems.push({
//     code: learnjs.formatCode(probem.code),
//     name: probem.name
//   });
// });
// return formattedProblems;
return learnjs.problems.map(learnjs.formatCode);

// data/student-db.js

const students = [
  { student: 'Shahzeb', absent: true },
  { student: 'Kai', done: false },
  { student: 'Kate', done: false }
];

module.exports = {
  getAll: function () {
    return students;
  }
};
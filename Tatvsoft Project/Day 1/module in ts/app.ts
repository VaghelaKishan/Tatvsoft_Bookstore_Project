// module in ts
// what is module
// make 2 file and make module
// use them in single file

import sLogin from './student'
import tLogin from './teacher'

let teacher=new tLogin();
console.warn(teacher.data);

let student=new sLogin();
console.warn(student.data);
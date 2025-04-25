const students = [
    { id: 1, name: "Amit", age: 20, place: "Delhi", marks: { Math: 85, Science: 78, English: 88 } },
    { id: 2, name: "Priya", age: 22, place: "Mumbai", marks: { Math: 92, Science: 80, English: 76 } },
    { id: 3, name: "Rohit", age: 21, place: "Kolkata", marks: { Math: 75, Science: 72, English: 70 } },
    { id: 4, name: "Sneha", age: 23, place: "Pune", marks: { Math: 89, Science: 85, English: 90 } },
    { id: 5, name: "Vikram", age: 20, place: "Chennai", marks: { Math: 70, Science: 68, English: 65 } },
    { id: 6, name: "Sanya", age: 22, place: "Jaipur", marks: { Math: 95, Science: 90, English: 85 } },
    { id: 7, name: "Karan", age: 21, place: "Hyderabad", marks: { Math: 88, Science: 86, English: 84 } },
    { id: 8, name: "Anjali", age: 23, place: "Bangalore", marks: { Math: 91, Science: 89, English: 87 } },
    { id: 9, name: "Manoj", age: 20, place: "Lucknow", marks: { Math: 78, Science: 74, English: 80 } },
    { id: 10, name: "Pooja", age: 22, place: "Ahmedabad", marks: { Math: 82, Science: 79, English: 83 } }
];

// 10 Questions Using map()
// Use map() to create an array containing only student names.
const name=students.map((student)=>student.name)
console.log(name);

// Use map() to add a new property totalMarks in each student object that contains the sum of their marks.
const studentMarks=students.map((student=>({...student,totalMarks:student.marks.Math+student.marks.Science+student.marks.English})))
console.log(studentMarks);
// Use map() to create an array of objects with only name and place properties.
const name_place=students.map((student)=>({name:student.name,place:student.place}))
console.log(name_place);

// Use map() to return an array where each student's age is increased by 1.
const age = students.map((student)=>({...student, age:student.age+1}))
console.log(age)

// Use map() to convert all student names to uppercase.
const  UpperName=students.map((student)=>({...student,name:student.name.toUpperCase()}))
console.log(UpperName);
// Use map() to round up all the Science marks to the nearest multiple of 5.
const SciencceMarks=students.map((student)=>({...student, marks:{...student.marks, Science:Math.ceil(student.marks.Science/5)*5}}))
console.log(SciencceMarks);

// Use map() to generate an array of formatted strings: "<Name> from <Place> scored <Total Marks>".
const formatedString=students.map((student)=>(`${student.name} from ${student.place} scored ${student.marks.Math+student.marks.Science+student.marks.English}`));
console.log(formatedString);

// Use map() to create an array where marks is transformed into an array [Math, Science, English].
const marks=students.map((student)=>({...student, marks:Object.values(student.marks)}))
console.log(marks);

// Use map() to check if each student has passed (totalMarks >= 200), adding a new key passed (true/false).
const passed=students.map((student)=>({...student, passed:student.marks.Math+student.marks.Science+student.marks.English>=200}))
console.log(passed);

// Use map() to create a new array where English marks are increased by 5 for every student.

const EnglishMarks=students.map((student)=>({...student,marks:({...student.marks,English:student.marks.English+5})}))
console.log(EnglishMarks);

// 10 Questions Using filter()
// Use filter() to get only the students who are older than 21.
 const age21=students.filter((student)=>student.age>21);
 console.log(age21);
// Use filter() to get the students who scored more than 80 in Math.
const getMath=students.filter((student)=> student.marks.Math>80)
console.log(getMath);
// Use filter() to get the students who have total marks greater than 250.
const total=students.filter((student)=>student.marks.Math+student.marks.Science+student.marks.English>250)
console.log(total);

// Use filter() to find students from Mumbai and Delhi only.
const from=students.filter((student)=>student.place==="Mumbai"||student.place==="Delhi");
console.log(form);

// Use filter() to get students who failed in English (less than 40 marks).
const lessEnglish=students.filter((student)=>student.marks.English<40);
console.log(lessEnglish);

// Use filter() to get students who have an even id.
const evenID=students.filter((student)=>student.id%2===0);
console.log(evenID);

// Use filter() to find students whose names start with the letter "A".
const Aname=students.filter((student)=>student.name.startsWith("A"));
console.log(Aname);

// Use filter() to get students who have a perfect score (100) in any subject.
const perfect=students.filter((student)=>student.marks.Math===100||student.marks.Science===100||student.marks.English===100);
console.log(perfect);
// Use filter() to find students who scored below 75 in at least one subject.
const below75=students.filter((student)=>student.marks.Math<75||student.marks.Science<75||student.marks.English<75);
console.log(below75);

// Use filter() to find students whose total marks are between 200 and 250.
const between=students.filter((student)=>student.marks.Math+student.marks.Science+student.marks.English>200&&student.marks.Math+student.marks.Science+student.marks.English<250);
console.log(between);

// 10 Questions Using reduce()
// Use reduce() to calculate the total marks of all students combined.

// Use reduce() to find the average marks in Math across all students.

// Use reduce() to determine the highest total marks scored by any student.

// Use reduce() to find the lowest Science score among all students.

// Use reduce() to create an object where keys are places and values are arrays of student names from that place.

// Use reduce() to count how many students scored above 80 in English.

// Use reduce() to create an object where each subject is a key and the value is the total marks scored by all students in that subject.

// Use reduce() to find the student who scored the highest total marks.

// Use reduce() to return an object where keys are student names and values are their total marks.

// Use reduce() to calculate the percentage of students who passed (total marks >= 200).
// Task 1: Determining a student's performance level (if/else)
 
const averageGrade = 92;
 
if (averageGrade < 60) {
    console.log("Unsatisfactory");
} else if (averageGrade <= 70) {
    console.log("Satisfactory");
} else if (averageGrade <= 80) {
    console.log("Good");
} else if (averageGrade <= 90) {
    console.log("Very good");
} else if (averageGrade <= 100) {
    console.log("Excellent");
} else {
    console.log("Invalid grade");
}
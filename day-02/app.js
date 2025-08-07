var marks = prompt("Enter your marks out of 100:");

if (marks >= 90 && marks <= 100) {
  alert("Grade: A+");
} else if (marks >= 80 && marks < 90) {
  alert("Grade: A");
} else if (marks >= 70 && marks < 80) {
  alert("Grade: B");
} else if (marks >= 60 && marks < 70) {
  alert("Grade: C");
} else if (marks >= 50 && marks < 60) {
  alert("Grade: D");
} else if (marks >= 0 && marks < 50) {
  alert("Grade: Fail");
} else {
  alert("Invalid input. Please enter marks between 0 and 100.");
}
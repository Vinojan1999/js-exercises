function viewCourse() {
    let course = {
        courseName: "SE",
        courseFee: "Rs 150 000",
        startDate: "02.06.2022",
        center: "Minimax Studio"
    }

    document.getElementById('courses').innerHTML = "Course Name: " + course.courseName + "<br>Course Fee: " + course.courseFee + "<br>Start Date: " + course.startDate + "<br>Center: " + course.center;
}
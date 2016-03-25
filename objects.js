function Course(name, code, instructor, classroom) {
    this.name = name; 
    this.code = code;
    this.instructor = instructor;
    this.classroom = classroom;
};
var Astro = new Course("Astrophysics", "PHY657", "Vincent Black", "S-12");
var MaterialCutting = new Course("Material Cutting", "ME205", "Katherine Black", "M-23");

var Students = {
    'ID' : "",
    'first' : "",
    'last' : "",
    'courses' : [],
    calcGPA : function() {
        var gpa = 0;
        for(var i = 0; i<this.courses.length; i++) {
            
        }
    }
}
var target_div = document.getElementById('display_area');
var running_grade_total = 0;
var running_grade_count = 0;


function add_record()
{
	var container = document.createElement('div'); // block
	var student = document.createElement('span'); // inline for student name
	var subject =document.createElement('span');
	var grade = document.createElement('span'); // inline for student grade
	
	
	student.textContent = document.getElementById('name_input').value; //getting the value inside student name


	subject.textContent=document.getElementById('class_input').value; //getting the value inside subject
	
	grade.textContent = document.getElementById('grade_input').value.toUpperCase(); //getting the value insde grade

	var student_grade_value = document.getElementById('grade_input').value; // grabbing the value inside grade
	running_grade_total += parseInt(student_grade_value); //adds with itself
	running_grade_count++;  // increment up by one
	var average = document.querySelector('.average');
	var running_grade_average = running_grade_total / running_grade_count;

	container.style.background ='blue';
	container.style.color = 'white';
	container.style.marginTop = '25px';


	if(0 <= student_grade_value  && student_grade_value <= 60){
		grade.style.color="brown";
	}
	if(61 <= student_grade_value && student_grade_value <= 75){
		grade.style.color ='orange';
		// add a font-weight
	}
	if(71 <= student_grade_value && student_grade_value <= 89){
		grade.style.color = "blue";
	}
	if(90 <= student_grade_value && student_grade_value <= 99){
		grade.style.color = "green";
	}
	if(student_grade_value == 100){
		grade.style.color = "red";
	}

	average.innerHTML = Math.floor(running_grade_average);  //rounded	
	console.log(average);	//SUCCESSFUL


	average.style.paddingLeft = '100px'; // make this lined up with the grade
	subject.style.margin ='50px';
	grade.style.margin= '50px';

	//If its a letter grade colors the letters
	
	// colors the letters
	subject.appendChild(grade);  //grade to be the child of subject
	student.appendChild(subject);  //make that the child of the student name
	container.appendChild(student);   // student name is the child of container
	target_div.appendChild(container);     // append container after target div

}

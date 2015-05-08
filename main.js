var target_div = document.getElementById('display_area'); // this will allow us to grab display area
var running_grade_total = 0;
var running_grade_count = 0;
var student_array_objects = {};
var student_list_index = 0;

function add_record() {
    var container = document.createElement('div'); // block
    var student = document.createElement('span'); // inline for student name
    var last_name = document.createElement('span');
    var subject = document.createElement('span');
    var grade = document.createElement('span'); // inline for student grade
    var delete_button = document.createElement('button');
    var student_object = {}; // make this a local scope;
    var student_grade_value = document.getElementById('grade_input').value; // This would grab the code for later use
    var student_student_value = document.getElementById('name_input').value; // This would grab the code for later use
    var subject_value = document.getElementById('class_input').value; // This would grab the code for later use
    var last_name_value = document.getElementById('last_input').value //this grabs whatever the value is for last name
    // student_grade_value = parseFloat(student_grade_value);
    // if(student_grade_value == '' || student_student_value == '' || subject_value == ''){
    //	alert('Please enter a proper value');
    //	return;
    // } else if (typeof student_grade_value != 'number'){
    //	alert('Please enter in a number');
    //	return;
    // }
    //STUDENT OBJECTS //
    student.textContent = student_student_value; // this allows us to make it visible for us to see
    last_name.textContent = last_name_value; // this grabs the value for last name and puts that as the text content for that div
    subject.textContent = subject_value; // this allows us to make it visible for us to see
    grade.textContent = student_grade_value; // this allows us to make it visible for us to see
    delete_button.textContent = "DELETE";
    student_object.name = student_student_value;
    student_object.lastName = last_name_value;
    student_object.subject = subject_value;
    student_object.grade = student_grade_value;
    //student_array_objects.push(student_object); //storing the student object and is pushing it into student object
    student_array_objects[student_list_index] = student_object;
    //  student_array_objects { 					}
    //  student_list_index  a count for the numbers
    //  student list_index == to the object
    //ex:  {    (student_list_index):0  {name:'Ahad', subject:'science', ETC }      }
    //STUDENT OBJECTS //
    //STYLES THE CONTAINER //
    container.style.background = 'lavender';
    container.style.color = 'black';
    container.style.marginTop = '15px';
    //STYLES THE CONTAINER //
    //  THIS COLORS THE NUMBERS  //
    if (0 <= student_grade_value && student_grade_value <= 60) {
        grade.style.color = "brown";
        grade.fontWeight = "bold";
    }
    if (61 <= student_grade_value && student_grade_value <= 75) {
        grade.style.color = 'orange';
        grade.fontWeight = "bold";
    }
    if (71 <= student_grade_value && student_grade_value <= 89) {
        grade.style.color = "blue";
        grade.fontWeight = "bold";
    }
    if (90 <= student_grade_value && student_grade_value <= 99) {
        grade.style.color = "green";
        grade.fontWeight = "bold";
    }
    if (student_grade_value == 100) {
        grade.style.color = "red";
        grade.fontWeight = "bold";
    }
    //  THIS COLORS THE NUMBERS  //
    // GETS THE AVERAGE  //
    running_grade_total += parseInt(student_grade_value); //adds with itself and makes it into a number
    running_grade_count++; // increment up by one
    var average = document.querySelector('.average');
    var running_grade_average = running_grade_total / running_grade_count;
    average.innerHTML = Math.floor(running_grade_average) + "%"; // and allows us to store that data inside the inner div + this also rounds the number	
    average.style.float = 'right'; // make this lined up with the grade
    // GETS THE AVERAGE  //
    // STYLE THE ELEMENTS  //
    container.classList.add('position');
    subject.classList.add('spacing1');
    grade.classList.add('spacing2');
    last_name.classList.add('spacing3');
    student.classList.add('spacing4');
    delete_button.classList.add('delete');
    // STYLE THE ELEMENTS  //
    // 			DELETE FUNCTIONALITY  		//
    (function() { // why do we need to call it with itself
        var my_object = student_list_index; // why do we need to make this declared into a new variable.
        $(delete_button).click(function() {
            $(container).remove();
            console.log("I want to delete ", student_array_objects[my_object]) // my object allows you to get the object number
            delete student_array_objects[my_object];
            running_grade_total -= student_object.grade; //when object deletes your subtracting the deleted student.object.grade
            running_grade_count-- // 					  // incrementing down a count step
            average.innerHTML = Math.floor(running_grade_total / running_grade_count); //change the average.innerHTML
            //running_grade_count--
            //average.innerHTML = running_grade_total/running_grade_count;
        });
    })()
    //				Object {1: Object}
    //				Object {   (object number) 1 (object number): name:'Ahad', age: 19}
    // 			DELETE FUNCTIONALITY  		//
    // POSITIONING IT INSIDE THE CONTAINER  //
    grade.appendChild(delete_button);
    subject.appendChild(grade); //grade to be the child of subject
    last_name.appendChild(subject); // make the child of last_Name
    student.appendChild(last_name) //make that the child of the student name
    container.appendChild(student); // student name is the child of container
    target_div.appendChild(container); // append container after target div
    // POSITIONING IT INSIDE THE CONTAINER  //
    //CLEARS THE INPUT AFTER SOMETHING IS ADDED
    document.getElementById('name_input').value = ''; // after the code top is finished I then want to reset the inputs
    document.getElementById('class_input').value = '';
    document.getElementById('grade_input').value = '';
    document.getElementById('last_input').value = '';
    student_list_index++; //incrementing
}
//CLEARS THE INPUT AFTER SOMETHING IS ADDED
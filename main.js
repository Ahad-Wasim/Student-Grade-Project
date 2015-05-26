var target_div = document.getElementById('display_area'); 
var running_grade_total = 0;
var running_grade_count = 0;
var student_array_objects = {};
var student_list_index = 0;

function add_record() {
    var container = document.createElement('div'); 
    var student = document.createElement('span'); 
    var last_name = document.createElement('span');
    var subject = document.createElement('span');
    var grade = document.createElement('span'); 
    var delete_button = document.createElement('button');
    var student_object = {}; 
    var student_grade_value = document.getElementById('grade_input').value; 
    var student_student_value = document.getElementById('name_input').value;
    var subject_value = document.getElementById('class_input').value; 
    var last_name_value = document.getElementById('last_input').value;
    

    //STUDENT OBJECTS //
    student.textContent = student_student_value; 
    last_name.textContent = last_name_value; 
    subject.textContent = subject_value; 
    grade.textContent = student_grade_value; 
    delete_button.textContent = "DELETE";
    student_object.name = student_student_value;
    student_object.lastName = last_name_value;
    student_object.subject = subject_value;
    student_object.grade = student_grade_value;
    
    student_array_objects[student_list_index] = student_object;
    
    //STUDENT OBJECTS //
    //STYLES THE CONTAINER //
   
    container.style.background = '#fff';
    container.style.paddingBottom = '22px';
    container.style.color = 'black';
    container.style.marginTop = '15px';
    //STYLES THE CONTAINER //
    //  THIS COLORS THE NUMBERS  //
    if (0 <= student_grade_value && student_grade_value <= 60) {
        grade.style.color = "red";
        grade.fontWeight = "bold";
    }
    if (61 <= student_grade_value && student_grade_value <= 75) {
        grade.style.color = 'purple';
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
    running_grade_total += parseInt(student_grade_value); 
    running_grade_count++; 
    var average = document.querySelector('.average');
    var running_grade_average = running_grade_total / running_grade_count;
    average.innerHTML = Math.floor(running_grade_average) + "%"; 
    average.style.float = 'right'; 
    // GETS THE AVERAGE  //
    // STYLE THE ELEMENTS  //
    container.classList.add('bounceInDown');
    subject.classList.add('spacing1');
    grade.classList.add('spacing2');
    last_name.classList.add('spacing3');
    student.classList.add('spacing4');
    delete_button.classList.add('delete');
    // STYLE THE ELEMENTS  //
    // 			DELETE FUNCTIONALITY  		//
    (function() { 
        var my_object = student_list_index; 
        $(delete_button).click(function() {
            $(container).remove();
            console.log("I want to delete ", student_array_objects[my_object]) 
            delete student_array_objects[my_object];
            running_grade_total -= student_object.grade; 
            running_grade_count-- ; 					 
            average.innerHTML = Math.floor(running_grade_total / running_grade_count); 
        });
    })();
    
    grade.appendChild(delete_button);
    subject.appendChild(grade); 
    last_name.appendChild(subject); 
    student.appendChild(last_name) 
    container.appendChild(student); 
    target_div.appendChild(container); 
    // POSITIONING IT INSIDE THE CONTAINER  //
    //CLEARS THE INPUT AFTER SOMETHING IS ADDED
    document.getElementById('name_input').value = ''; // after the code top is finished I then want to reset the inputs
    document.getElementById('class_input').value = '';
    document.getElementById('grade_input').value = '';
    document.getElementById('last_input').value = '';
    student_list_index++; //incrementing
}
//CLEARS THE INPUT AFTER SOMETHING IS ADDED
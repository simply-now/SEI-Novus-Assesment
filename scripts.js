let employeeDataSet = 
    {
        "employees" : [ 
            {
                "name"  : "Adam",
                "age" : 20,
                "salary" : 30100,
            },
            {
                "name"  : "Bob",
                "age" : 60,
                "salary" : 102000,
            },
            {
                "name"  : "Carla",
                "age" : 31,
                "salary" : 57000,
            },
            {
                "name"  : "Dave",
                "age" : 42,
                "salary" : 22000,
            },
            {
                "name"  : "Ethel",
                "age" : 80,
                "salary" : 91000,
            },
            {
                "name"  : "Frank",
                "age" : 28,
                "salary" : 73000,
            },
            {
                "name"  : "Gina",
                "age" : 21,
                "salary" : 16000,
            },
        ]    
 }
;

console.log(employeeDataSet);

function sortByAge (a, b){
    return b.age - a.age;
}

function sortBySalary (a, b){
    return  b.salary - a.salary;
}


function renderBarGraph (type) {
    employeeDataSet.employees.sort(type);
    $('#chart-container').empty();
    if (type === sortBySalary){
        console.log('render by salary graph');
        employeeDataSet.employees.forEach((employee, index) => {
            $('#chart-container').append('<div id="'+ employee.name + index +'" class="employee-bar-container"></div>');
            $('#'+ employee.name + index +'').append('<div class="employee-name">' + employee.name + '</div>');
            $('#'+ employee.name + index +'').append('<div class="employee-salary" style="width:' + employee.salary + '%">' + employee.salary + '</div>');
        });
    } else if (type === sortByAge) {
        console.log('render by age graph');
        employeeDataSet.employees.forEach((employee, index) => {
            $('#chart-container').append('<div id="'+ employee.name + index +'" class="employee-bar-container"></div>');
            $('#'+ employee.name + index +'').append('<div class="employee-name">' + employee.name + '</div>');
            $('#'+ employee.name + index +'').append('<div class="employee-age" style="width:' + employee.age + '%">' + employee.age + '</div>');
        });
    } else {
        console.log('error: invalid value');
    }
}

$(document).ready(function () {
    renderBarGraph(sortByAge);
    $('#chart-options').change(function () {
        getelementfromdropdown()
    });
});



    function getelementfromdropdown() {
    var value = $('#chart-options').val();
    if (value === 'Age') {
        console.log('Option Selected: Age');
        renderBarGraph(sortByAge);
        console.log(...employeeDataSet.employees);
    } else if (value === 'Salary') {
        console.log('Option Selected: Salary');
        renderBarGraph(sortBySalary);
        console.log(...employeeDataSet.employees);
    } else {
        console.log('error: invalid value');
    }
    }
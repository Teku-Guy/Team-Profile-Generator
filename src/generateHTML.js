//function for roles content
//manager content layout
function generateManager(manager){
    return `
    <div class="card-body">   
        <div class="card"> 
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

//engineer layout
function generateEnginner(engineer){
    return `
    <div class="card-body">   
        <div class="card"> 
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `;
}
//Intern
function generateIntern(intern){
    return `
    <div class="card-body">   
        <div class="card"> 
             <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

function getEmployeeType(data){
    if(data === 'Intern'){
        return `
        <h3 id="role" class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data}</h3>
        `;
    }
    if(data === 'Engineer'){
        return `
        <h3 id="role" class="card-title"><i class="fas fa-glasses mr-2"></i>${data}</h3>
        `;
    }
    if(data === 'Manager'){
        return `
        <h3 id="role" class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data}</h3>
        `;
    }
}

//gen employee
const generateEmployees = data => {
    return `
        ${data
            .filter(employee => employee.getRole() === "Manager")
            .map((emp = { name, role, email, id, officeNumber}) => {
                return `
                <div class="card" style="width: 20rem;">
                    <div id="title" class="card-header bg-primary">
                        <h2 class="card-title">${emp.name}</h2>
                        ${getEmployeeType(emp.role)}
                    </div>
                    ${generateManager(emp)}
                </div>`;
            })
            .join('')}
        ${data
            .filter(employee => employee.getRole() === "Intern")
            .map((emp = { name, role, email, id, school}) => {
                return `
                <div class="card" style="width: 20rem;">
                    <div id="title" class="card-header bg-primary">
                        <h2 class="card-title">${emp.name}</h2>
                        ${getEmployeeType(emp.role)}
                    </div>
                    ${generateIntern(emp)}
                </div>`;
            })
            .join('')}
        ${data
            .filter(employee => employee.getRole() === "Engineer")
            .map((emp = { name, role, email, id, github}) => {
                return `
                <div class="card" style="width: 20rem;">
                    <div id="title" class="card-header bg-primary">
                        <h2 class="card-title">${emp.name}</h2>
                        ${getEmployeeType(emp.role)}
                    </div>
                    ${generateEnginner(emp)}
                </div>`;
            })
            .join('')}
    `;
}

//need a fucntion to generate html layout and call role function layout
function generateHTML(templateData) {
    console.log(templateData);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
    </head>
    <body>
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </header>
        <main class="container">
            <div class="row"> 
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateEmployees(templateData)}
                </div>
            </div>
        </main>
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = generateHTML;
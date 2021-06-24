//function for roles content
//manager content layout
function generateManager(manager){
    return `
        <div class="card" style="width: 20rem;">
            <div id="title" class="card-header bg-primary">
                <h5 class="card-title">${employee.name}</h5>
                <span id="role"><i class="fas fa-glasses"></i>${employee.getRole()}</span>
            </div>
            <div class="card-body">   
                <div class="card"> 
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

//engineer layout
function generateEnginner(engineer){
    return `
        <div class="card" style="width: 20rem;">
            <div id="title" class="card-header bg-primary">
                <h5 class="card-title">${employee.name}</h5>
                <span id="role"><i class="fas fa-glasses"></i>${employee.getRole()}</span>
            </div>
            <div class="card-body">   
                <div class="card"> 
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
//Intern
function generateIntern(intern){
    return `
        <div class="card" style="width: 20rem;">
            <div id="title" class="card-header bg-primary">
                <h5 class="card-title">${employee.name}</h5>
                <span id="role"><i class="fas fa-graduation-cap"></i>${employee.getRole()}</span>
            </div>
            <div class="card-body">   
                <div class="card"> 
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">School: ${employee.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
//employee
function generateEmployee(employee){
    return `
        <div class="card" style="width: 20rem;">
            <div id="title" class="card-header bg-primary">
                <h5 class="card-title">${employee.name}</h5>
                <span id="role"><i class="fas fa-id-badge"></i>${employee.getRole()}</span>
            </div>
            <div class="card-body">   
                <div class="card"> 
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="#">${employee.email}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

//need a fucntion to generate html layout and call role function layout
function renderHTML(data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            
        <i class="fas fa-mug-hot"></i>
        </main>
        <script src="https://kit.fontawesome.com/8e12a66f49.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

module.exports = generateHTML;
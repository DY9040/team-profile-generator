const Questions = require('../lib/Questions');
const Employee = require('../lib/Employee');

const generateEmployee = employee => {

    console.log(this.employee.getName());

    return `
    <div>
    ${employee.getRole()}
    </div>
    `
}

module.exports = employee => {
    

    return `
    <!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
${generateEmployee(employee)}
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
            <nav class="flex-row">
                <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/"></a>
            </nav>
        </div>
    </header>
    <main class="container my-5">

    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; by </h3>
    </footer>
</body>
</html>
`;
};
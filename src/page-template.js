const Questions = require('../lib/Questions');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

//Manager//

const generateManager = teamList => {

    return `
    ${teamList
    .filter(({ office }) => office)
    .map(({ name, id, email, office }) => {
        return `
        <article class="project-article" style="border-top-color: #4588F7;">
                <div class="project-content">
                    <div class="post-info" style="color: #4588f7;"><span class="fa-solid fa-bullhorn">Manager</div>
                        <h5 class="post-title">${name}</h5>
                        <div class="post-description">ID: ${id} <br> Email: ${email} <br> Office: ${office}</div>
                </div>
            </article>
    `;
    })
    .join('')}
    `
}

// Engineer//////////////
const generateEngineer = teamList => {

    return `
    ${teamList
    .filter(({ github }) => github)
    .map(({ name, id, email, github }) => {
        return `
        <article class="project-article" style="border-top-color: #FF3AF3;">
                <div class="project-content">
                    <div class="post-info" style="color: #FF3AF3;"><span class="fa-solid fa-code">Engineer</div>
                        <h5 class="post-title">${name}</h5>
                        <div class="post-description">ID: ${id} <br> Email: ${email} <br> Github: ${github}</div>
                </div>
            </article>
    `;
    })
    .join('')}
    `
}

// intern// ///////////
const generateIntern = teamList => {
    
        return `
        ${teamList
        .filter(({ school }) => school)
        .map(({ name, id, email, school }) => {
            return `
            <article class="project-article" style="border-top-color: #7463F4;">
                    <div class="project-content">
                        <div class="post-info" style="color: #7463F4;"><span class="fa-solid fa-graduation-cap">Intern</div>
                            <h5 class="post-title">${name}</h5>
                            <div class="post-description">ID: ${id} <br> Email: ${email} <br> School: ${school}</div>
                    </div>
                </article>
        `;
        })
        .join('')}
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
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100,300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Karma:wght@300,500,600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1 class="page-title text-secondary bg-dark py2 px-3">Team Generator</h1>
    </header>

    <section class="section-project">
    <div class="project-articles">
    ${generateManager(employee)}
    ${generateEngineer(employee)}
    ${generateIntern(employee)}
    </div>
    </section>
</body>
</html>
`;
};
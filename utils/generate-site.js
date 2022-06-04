const fs = require('fs');

//1st promise////////////////
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            } 
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = { writeFile };
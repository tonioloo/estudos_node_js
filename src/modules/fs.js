const { error } = require('console');
const fs = require('fs');
const path = require('path');

// Criar uma pasta

// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.error('Erro ao criar a pasta:', error);
//     }

//     console.log('Pasta criada com sucesso!');
// });

// Criar um arquivo dentro da pasta

fs.writeFile(path.join(__dirname, 'test', 'test.txt'), "Hello World!", (error) => {
    if (error) {
        return console.error('Erro ao criar o arquivo:', error);
    }

    console.log('Arquivo criado com sucesso!');

    
// Adicionar conteúdo a um arquivo

    fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'This is a new line code!', (error) => {
    if (error) {    
        return console.error('Erro ao adicionar conteúdo ao arquivo:', error);
    }
        console.log('Conteúdo adicionado com sucesso!');
        });
    })

// Ler conteudo de um arquivo

fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (error, data) => {
    if (error) {
        return console.error('Erro ao ler o arquivo:', error);
    }
    
    console.log('Conteúdo do arquivo:', data);
});
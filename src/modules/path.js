const path = require('path');

// Apenas o nome do arquivo
console.log(path.basename(__filename)); // Output: path.js

// Nome do diretório atual
console.log(path.dirname(__filename)); // Output: /path/to/modules

// Extensão do arquivo
console.log(path.extname(__filename)); // Output: .js

// Criar objeto path
console.log(path.parse(__filename)); // Cria um objeto com informações sobre o caminho do arquivo

// Junta varios segmentos de caminho
console.log(path.join(__dirname, 'teste', 'test.html')); // Output: /path/to/modules/path.js
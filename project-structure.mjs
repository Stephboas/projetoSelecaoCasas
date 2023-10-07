import { readdirSync, writeFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

function listFiles(dir) {
    const files = readdirSync(dir, { withFileTypes: true });
    const fileNames = [];

    files.forEach((file) => {
        const filePath = join(dir, file.name);

        if (file.isDirectory() && file.name !== 'node_modules') {
            fileNames.push(...listFiles(filePath));
        } else if (
            (file.isFile() && 
            ['.cs', '.cshtml', '.json', '.js', '.mjs', '.cjs', '.css', '.html', '.ts'].includes(extname(file.name))) &&
            file.name !== 'package-lock.json'
        ) {
            fileNames.push(filePath);
        }
    });

    return fileNames;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectFiles = listFiles(__dirname);
const projectStructure = projectFiles.join('\n');

writeFileSync('project-structure.txt', projectStructure, 'utf-8');
console.log('Arquivo project-structure.txt criado com sucesso.');

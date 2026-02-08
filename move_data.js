import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Le dossier où sont tes recettes
const directoryPath = path.join(__dirname, 'src/pages/recipes');

fs.readdir(directoryPath, (err, files) => {
    if (err) return console.log('Impossible de lire le dossier: ' + err);

    files.forEach((file) => {
        if (!file.endsWith('.jsx')) return; // On ne touche qu'aux fichiers JSX

        const filePath = path.join(directoryPath, file);
        
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return console.log(err);

            // 1. On cherche le bloc recipeData
            // On cherche de "const recipeData" jusqu'à "image: ... };"
            const regex = /(?:\s+)const recipeData = {[\s\S]*?image:[\s\S]*?};/g;
            const match = data.match(regex);

            if (match) {
                let dataBlock = match[0].trim(); // On récupère le bloc
                
                // On ajoute "export" devant
                let newDataBlock = `export ${dataBlock}`;

                // 2. On supprime l'ancien bloc (celui qui est dedans)
                let newContent = data.replace(regex, '');

                // 3. On insère le nouveau bloc juste après les imports
                // On cherche la dernière ligne qui commence par "import"
                const lastImportIndex = newContent.lastIndexOf('import ');
                const endOfImports = newContent.indexOf('\n', lastImportIndex) + 1;

                const finalContent = 
                    newContent.slice(0, endOfImports) + 
                    '\n' + newDataBlock + '\n' + 
                    newContent.slice(endOfImports);

                // 4. On sauvegarde
                fs.writeFile(filePath, finalContent, 'utf8', (err) => {
                    if (err) return console.log(err);
                    console.log(`✅ Réparé : ${file}`);
                });
            } else {
                console.log(`⚠️ Pas trouvé dans : ${file} (Déjà fait ?)`);
            }
        });
    });
});
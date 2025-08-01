import fs from 'fs'
import path from 'path';


const listFilesInFolder = (folderPath => {
    try {
        const files = fs.readdirSync(folderPath);
        return files.filter(file => {
            const fullPath = path.join(folderPath, file);
            return fs.statSync(fullPath).isFile();
        });
    } catch (err) {
        console.error(`Error reading folder "${folderPath}":`, err);
        return [];
    }

})

export const folders = {
    listFilesInFolder
}
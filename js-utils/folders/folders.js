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

const moveFiletoFolder = (file, toFolder) => {
    try {
        const fileName = path.basename(file); // get just the file name
        const destination = path.join(toFolder, fileName);

        fs.renameSync(file, destination); // move the file
        console.log(`Moved ${file} → ${destination}`);
    } catch (err) {
        console.error(`Failed to move file: ${err.message}`);
    }
}

export const folders = {
    listFilesInFolder,
    moveFiletoFolder
}
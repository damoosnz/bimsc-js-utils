import fs from 'fs'

const writeJsonFile = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

const readJsonFile = (file) => {
    const data = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(data);
    return json
}


export const filesNode = {
    writeJsonFile,
    readJsonFile
}


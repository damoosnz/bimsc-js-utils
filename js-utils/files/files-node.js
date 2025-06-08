import fs from 'fs'

const writeJsonFile = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

const readJsonFile = (file) => {
    const data = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(data);
    return json
}

const logToJsonFile = (file, log) => {
    let fileData = []
    try {
        fileData = readJsonFile(file)
    } catch (err) { }
    fileData.push(log)
    writeJsonFile(file, fileData)
}

const readFileContents = async (file) => {
    const fileContents = fs.readFileSync(file, 'utf-8');
    return fileContents
}

const createReadStream = (file, encoding = null) => {
  return fs.createReadStream(file, encoding ? { encoding } : undefined);
};


export const filesNode = {
    writeJsonFile,
    readJsonFile,
    logToJsonFile,
    readFileContents,
    createReadStream,
}


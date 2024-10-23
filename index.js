import { files } from "./js-utils/files/files.js";

export const bimscJs = {
    files: files
}

// temp during dev

const csvText = await  files.fetchCSV('https://api.knack.com/v1/applications/658014c48daf9200276b71ee/download/asset/67177e7ca1953b02d94aca2c/a030713001971300015dec162.csv')
// console.log(csvText)

const csvObj = files.parseCSV(csvText)
console.log(csvObj.length, csvObj[csvObj.length-1])

const csvCleaned = files.cleanCSV(csvObj)
console.log(csvCleaned[1314])
console.log(csvCleaned[1315])
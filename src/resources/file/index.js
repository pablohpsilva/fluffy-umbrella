import csv from 'csvtojson'

export const readFilePartial = func => ({ currentTarget: { result } }) =>
    new Promise((resolve, reject) => {
        try {
            return func(resolve, result)
        } catch (error) {
            reject(error)
        }
    })

export const readCSVFile = readFilePartial((resolve, result) =>
    csv({ output: 'json' }).fromString(result).then(resolve)
)

export const readJSONFile = readFilePartial((resolve, result) => resolve(JSON.parse(result)))

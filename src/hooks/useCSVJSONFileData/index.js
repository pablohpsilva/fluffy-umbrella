import { useState, useEffect } from 'react'
import csv from 'csvtojson'

const readFilePartial = func => ({ currentTarget: { result } }) =>
    new Promise((resolve, reject) => {
        try {
            return func(resolve, result)
        } catch (error) {
            reject(error)
        }
    })

const readCSVFile = readFilePartial((resolve, result) => csv({ output: 'json' }).fromString(result).then(resolve))

const readJSONFile = readFilePartial((resolve, result) => resolve(JSON.parse(result)))

const readFile = (accept, files) => {
    if (!files || !files.length) {
        return new Promise(resolve => resolve([]))
    }

    return Promise.all(
        files.map(
            file =>
                new Promise(resolve => {
                    const { type: _type } = file
                    const reader = new FileReader()
                    const type = _type.replace(/(.*)\//g, '')
                    const acceptedTypes = `${accept}`.replace(/\./g, '').split(',')

                    if (!acceptedTypes.includes(type)) {
                        return reject('Invalid file type.')
                    }

                    const onLoadFileReader = type.includes('csv') ? readCSVFile : readJSONFile

                    reader.onload = e => onLoadFileReader(e).then(resolve)

                    reader.onerror = () => reject(reader.error)

                    // Read in the image file as a data URL.
                    reader.readAsText(file)
                })
        )
    )
}

const useCSVJSONFileData = (accept, files) => {
    const [data, setData] = useState()

    useEffect(() => {
        const readFileAsync = async () => {
            if (accept && files.length) {
                const data = await readFile(accept, files)
                setData(data)
            }
        }
        readFileAsync()
    }, [accept, files])

    return {
        data,
        readFile
    }
}

export default useCSVJSONFileData

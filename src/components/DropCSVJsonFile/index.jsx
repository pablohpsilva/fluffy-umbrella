import React from 'react'

import { DropFile } from '@/components'
import { readCSVFile, readJSONFile } from '@/resources/file'

const readFile = (accept, files) =>
    new Promise(resolve => {
        // Loop through the FileList and render image files as thumbnails.
        if (!files || !files.length) {
            return
        }

        const file = files[0]
        const { type: _type } = file
        const reader = new FileReader()
        const type = _type.replace(/(.*)\//g, '')
        const acceptedTypes = `${accept}`.replace(/\./g, '').split(',')

        if (!acceptedTypes.includes(type)) {
            return reject('fuck you')
        }

        const onLoadFileReader = type.includes('csv') ? readCSVFile : readJSONFile

        reader.onload = e => onLoadFileReader(e).then(resolve)

        reader.onerror = () => reject(reader.error)

        // Read in the image file as a data URL.
        reader.readAsText(file)
    })

const DropCSVJsonFile = props => {
    const {
        text = 'Please click (or drop) here your .CSV or .JSON file',
        accept = '.json,.csv',
        multiple = false,
        size = 1e7,
        onChange = ev => console.log('changed', ev),
        onError = error => console.log(error)
    } = props

    const handleFileIteraction = files => {
        readFile(accept, files)
            .then(data => {
                if (data && data.length) onChange(data)
                onError(`Empty data: ${data}`)
            })
            .catch(onError)
    }
    return (
        <DropFile
            text={text}
            accept={accept}
            multiple={multiple}
            size={size}
            onChange={handleFileIteraction}
            onDrop={handleFileIteraction}
        />
    )
}

export default DropCSVJsonFile

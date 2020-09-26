import React from 'react'

import { DropFile } from '@/components'
import { useCSVJSONFileData } from '@/hooks'

const DropCSVJsonFile = props => {
    const { readFile } = useCSVJSONFileData()

    const {
        text = 'Please click (or drop) here your .CSV or .JSON file',
        accept = '.json,.csv',
        multiple = false,
        size = 1e7,
        onChange = ev => null,
        onError = error => null
    } = props

    const handleFileIteraction = files => {
        readFile(accept, files)
            .then(([data]) => {
                if (data && data.length) return onChange(data)
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

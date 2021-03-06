import React, { useRef } from 'react'

import { uuid } from '@/utils'

const defaultStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    background: 'rgba(0,0,0,.3)',
    cursor: 'pointer'
}

const inputId = uuid()

const eventHandlerPartial = func => ev => {
    ev.preventDefault()
    ev.stopPropagation()
    ev.persist()
    func(ev)
}

const getEventFiles = ev => ev.target.files || (ev.dataTransfer ? ev.dataTransfer.files : null)

const handleFileIteraction = func => ev => {
    const files = [].slice.call(getEventFiles(ev))
    func(files)
}

const DropFile = ({ text, accept, multiple, size, onDrop, onDragOver, onChange, style }) => {
    const inputRef = useRef(null)
    const styles = { ...defaultStyles, ...style }

    const handleOnDrop = eventHandlerPartial(handleFileIteraction(onDrop))
    const handleOnChange = eventHandlerPartial(
        handleFileIteraction(files => {
            inputRef.current.value && onChange(files)
            // Cleaning input file value
            inputRef.current.value = ''
        })
    )
    const handleOnDragOver = eventHandlerPartial(onDragOver)

    return (
        <label
            htmlFor={inputId}
            onClick={inputRef?.current?.click}
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            style={styles}
        >
            <input
                ref={inputRef}
                id={inputId}
                type="file"
                onChange={handleOnChange}
                accept={accept}
                multiple={multiple}
                size={size}
                hidden
            />
            {text}
        </label>
    )
}

DropFile.defaultProps = {
    text: 'Please click (or drop) here your file',
    accept: '.json,.csv',
    multiple: false,
    size: 1e7,
    onDrop: ev => console.log(ev),
    onDragOver: () => null,
    onChange: files => console.log(files),
    style: {}
}

export default DropFile

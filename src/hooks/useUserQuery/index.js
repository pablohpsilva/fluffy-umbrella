import { useState, useEffect } from 'react'

const defaultProps = { url: 'https://hr.oat.taocloud.org/v1', limit: 20, offset: 0, skip: false }

const useUserQuery = ({ url, limit, offset: _offset, skip } = defaultProps) => {
    const [data, setData] = useState([])
    const [lastData, setLastData] = useState(undefined)
    const [offset, setOffset] = useState(_offset)
    const [isLast, setIsLast] = useState(false)

    const queryUsers = (users = []) => {
        if (!users.length) return new Promise(resolve => resolve([]))
        return Promise.all(
            users.map(({ userId }) => window.fetch(`${url}/user/${userId}`).then(response => response.json()))
        )
    }

    const fetchMore = async () => {
        const rawUsers = await window
            .fetch(`${url}/users?limit=${limit}&offset=${offset}`)
            .then(response => response.json())
        const users = await queryUsers(rawUsers)

        setLastData(users)
        setOffset(offset + users.length)
        setData([...data, ...users])

        if (!users.length) setIsLast(true)
    }

    useEffect(() => {
        if (!skip) {
            fetchMore()
        }
    }, [])

    return {
        data,
        fetchMore,
        offset,
        lastData,
        isLast
    }
}

export default useUserQuery

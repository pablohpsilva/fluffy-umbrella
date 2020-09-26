import React, { useEffect } from 'react'

import { DropCSVJsonFile, UserList } from '@/components'
import { useUserResolverData, useUserQuery } from '@/hooks'

const UseImporter = () => {
    const { data, fetchMore } = useUserQuery()
    const { users, resolveUsers } = useUserResolverData()

    const handleOnChange = users => {
        resolveUsers(users)
    }

    const handleError = error => console.log(error)

    useEffect(() => {
        if (data.length) {
            resolveUsers(data)
        }
    }, [data])

    return (
        <div>
            <DropCSVJsonFile onChange={handleOnChange} onError={handleError} />
            {users && users.length ? <h2>Imported users {users.length}</h2> : null}
            <button onClick={fetchMore} type="button">
                click
            </button>
            <UserList users={users} />
        </div>
    )
}

export default UseImporter

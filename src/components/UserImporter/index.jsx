import React, { useEffect } from 'react'

import { DropCSVJSONFile, UserList } from '@/components'
import { useUserResolverData, useUserQuery } from '@/hooks'

const loadMoreStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const UseImporter = () => {
    const { data, fetchMore, isLast, isLoading } = useUserQuery()
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
            <DropCSVJSONFile onChange={handleOnChange} onError={handleError} />
            {users && users.length ? <h2>Imported users {users.length}</h2> : null}
            <UserList users={users} />
            <div style={loadMoreStyle}>
                {!(isLast || isLoading) && (
                    <button onClick={fetchMore} type="button">
                        Load more
                    </button>
                )}
            </div>
        </div>
    )
}

export default UseImporter

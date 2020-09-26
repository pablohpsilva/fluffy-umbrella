import React, { useState } from 'react'

import { DropCSVJsonFile, UserList } from '@/components'
import { resolver } from '@/resources/user/resolver'

const UseImporter = () => {
    const [users, setUsers] = useState([])

    const handleOnChange = users => {
        setUsers(resolver(users))
    }

    const handleError = error => console.log(error)

    return (
        <div>
            <DropCSVJsonFile onChange={handleOnChange} onError={handleError} />
            {users && users.length ? <h2>Imported users</h2> : null}
            <UserList users={users} />
        </div>
    )
}

export default UseImporter

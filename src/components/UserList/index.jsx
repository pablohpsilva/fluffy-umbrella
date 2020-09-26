import React, { useState } from 'react'

import { UserItem } from '@/components'

const UserList = ({ users }) => {
    const [expandedUserId, setExpandedUserId] = useState(-1)

    const handleOnClick = ({ userId }) => setExpandedUserId(userId)

    return users.map(user => (
        <UserItem
            key={user?.userId}
            user={user}
            expanded={user?.userId === expandedUserId}
            onClick={handleOnClick}
            style={{ borderBottom: '1px solid #000', marginBottom: 16 }}
        />
    ))
}

export default UserList

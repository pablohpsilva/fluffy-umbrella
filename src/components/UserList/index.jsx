import React, { useState } from 'react'

import { UserItem } from '@/components'

const UserList = ({ users, style = {} }) => {
    const [expandedUserId, setExpandedUserId] = useState(-1)

    const handleOnClick = ({ userId }) => {
        if (userId === expandedUserId) return setExpandedUserId(-1)
        setExpandedUserId(userId)
    }

    return users.map(user => (
        <UserItem
            key={user?.userId}
            user={user}
            expanded={user?.userId === expandedUserId}
            onClick={handleOnClick}
            style={{ borderBottom: '1px solid #000', marginBottom: 16, ...style }}
        />
    ))
}

UserList.defaultProps = { user: [], style: {} }

export default UserList

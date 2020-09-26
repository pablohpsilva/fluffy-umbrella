import React, { useState } from 'react'

import { UserItem } from '@/components'

const defaultStyle = { borderBottom: '1px solid rgba(0, 0, 0, 0.3)', marginBottom: 16 }

const UserList = ({ users, style = {} }) => {
    const [expandedUserId, setExpandedUserId] = useState(-1)
    const styles = { ...defaultStyle, ...style }

    const handleOnClick = ({ userId }) => {
        if (userId === expandedUserId) return setExpandedUserId(-1)
        setExpandedUserId(userId)
    }

    return users.map((user, index) => (
        <UserItem
            key={user?.userId}
            user={user}
            expanded={user?.userId === expandedUserId}
            onClick={handleOnClick}
            style={styles}
        />
    ))
}

UserList.defaultProps = { user: [], style: {} }

export default UserList

import React, { useEffect } from 'react'

import { DropCSVJSONFile, UserList } from '@/components'
import { useUserResolverData, useUserQuery } from '@/hooks'

const defaultStyles = {
    drop: {},
    list: {},
    title: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '16px 0'
    },
    h2: {
        margin: 0,
        marginRight: 8
    },
    h3: {
        margin: 0,
        marginTop: 4
    },
    button: {
        border: 'none',
        background: 'none',
        padding: 16,
        outline: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase'
    },
    loadMore: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const UseImporter = ({ style = {} }) => {
    const { data, fetchMore, isLast, isLoading } = useUserQuery()
    const { users, resolveUsers } = useUserResolverData()
    const styles = { ...defaultStyles, ...style }

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
            <DropCSVJSONFile onChange={handleOnChange} onError={handleError} style={styles?.drop} />
            {users && users.length ? (
                <div style={styles.title}>
                    <h2 style={styles?.h2}>Imported users</h2>
                    <h3 style={styles?.h3}>{users.length}</h3>
                </div>
            ) : null}
            <UserList users={users} style={styles?.list} />
            <div style={styles?.loadMore}>
                {!(isLast || isLoading) && (
                    <button onClick={fetchMore} type="button" style={styles?.button}>
                        Load more
                    </button>
                )}
            </div>
        </div>
    )
}

export default UseImporter

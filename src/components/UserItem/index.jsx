import React from 'react'

const userItemCenterHorizontalVertical = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const defaultStyle = {
    wrapper: {
        width: '100%',
        height: 'fit-content',
        display: 'grid',
        gridTemplateColumns: '12fr'
    },
    grid: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 8fr 2fr',
        gridGap: 16,
        padding: 8,
        boxSizing: 'border-box',
        cursor: 'pointer'
    },
    gridContent: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    gridImage: userItemCenterHorizontalVertical,
    gridButton: userItemCenterHorizontalVertical,
    button: {
        border: 'none',
        background: 'none',
        padding: 16,
        outline: 'none',
        cursor: 'pointer'
    },
    image: {
        borderRadius: '100%',
        height: 60
    },
    h2: {
        margin: 0
    },
    h3: { ...userItemCenterHorizontalVertical, margin: 0, marginBottom: 16 },
    detailsWrapper: {
        padding: 8
    },
    details: {
        display: 'grid',
        gridGap: 8,
        gridTemplateColumns: '4fr 8fr'
    }
}

const fieldsMapper = ({ userId = '', login = '', password = '', gender = '', URL = '', address = '' }) =>
    [
        ['Internal ID', userId],
        ['Address', address],
        ['Gender', gender],
        ['Login', login],
        ['Password', password],
        ['URL', URL]
    ].filter(([, val]) => !!val)

const UserItem = ({ expanded = false, user = defaultUser, onClick = () => null, style = {} }) => {
    const userExtraData = fieldsMapper(user)
    const styles = { ...defaultStyle, ...style }
    const handleOnClick = ev => {
        ev.preventDefault()
        ev.stopPropagation()
        onClick(user)
    }
    return (
        <div style={styles?.wrapper}>
            <div style={styles?.grid} onClick={handleOnClick}>
                <div style={styles?.gridImage}>
                    {user?.picture && (
                        <img style={styles?.image} src={user?.picture} alt={`${user?.lastName}'s profile`} />
                    )}
                </div>
                <div style={styles?.gridContent}>
                    <h2 style={styles?.h2}>{`${user?.title} ${user?.lastName} ${user?.firstName}`}</h2>
                    <span>{user?.email}</span>
                </div>
                <div style={styles?.gridButton}>
                    <button type="button" onClick={handleOnClick} style={styles?.button}>
                        {expanded ? '-' : '+'}
                    </button>
                </div>
            </div>
            <div
                style={{
                    ...styles?.detailsWrapper,
                    opacity: expanded ? 1 : 0,
                    height: expanded ? 'fit-content' : 0,
                    display: expanded ? 'block' : 'none'
                }}
            >
                <h3 style={styles?.h3}>Details</h3>
                {userExtraData.map(([key, val]) => (
                    <div style={styles?.details} key={key}>
                        <div>{key}</div>
                        <div>{val}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

UserItem.defaultUser = {
    title: '',
    lastName: '',
    firstName: '',
    email: '',
    picture: '',
    userId: '',
    login: '',
    password: '',
    gender: '',
    URL: '',
    address: ''
}

export default UserItem

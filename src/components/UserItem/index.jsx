import React from 'react'

const userItemWrapper = {
    width: '100%',
    height: 'fit-content',
    display: 'grid',
    gridTemplateColumns: '12fr'
}

const userItemGrid = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '2fr 10fr',
    gridGap: 16,
    padding: 8,
    boxSizing: 'border-box',
    cursor: 'pointer'
}

const userItemCenterHorizontalVertical = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const userItemCenterVertical = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column'
}

const userItemHeader = {
    margin: 0
}

const userItemImage = {
    borderRadius: '100%',
    height: 60
}

const userItemDetailsGrid = {
    display: 'grid',
    gridGap: 8,
    gridTemplateColumns: '4fr 8fr'
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

const defaultUser = {
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

const UserItem = ({ expanded = false, user = defaultUser, onClick = () => console.log('clicked'), style = {} }) => {
    const userExtraData = fieldsMapper(user)
    const handleOnClick = () => {
        onClick(user)
    }
    return (
        <div style={{ ...userItemWrapper, ...style }}>
            <div style={userItemGrid} onClick={handleOnClick}>
                <div style={userItemCenterHorizontalVertical}>
                    {user?.picture && (
                        <img style={userItemImage} src={user?.picture} alt={`${user?.lastName}'s profile`} />
                    )}
                </div>
                <div style={userItemCenterVertical}>
                    <h2 style={userItemHeader}>{`${user?.title} ${user?.lastName} ${user?.firstName}`}</h2>
                    <span>{user?.email}</span>
                </div>
            </div>
            <div
                style={{
                    opacity: expanded ? 1 : 0,
                    height: expanded ? 'fit-content' : 0,
                    padding: 8
                }}
            >
                <h3 style={{ ...userItemCenterHorizontalVertical, ...userItemHeader, marginBottom: 16 }}>Details</h3>
                {userExtraData.map(([key, val]) => (
                    <div style={userItemDetailsGrid} key={key}>
                        <div>{key}</div>
                        <div>{val}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserItem

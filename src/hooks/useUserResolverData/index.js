import { useState } from 'react'

// Resolver functions
const userIdResolver = user => user?.userId ?? user?.email
const loginResolver = user => user?.login
const passwordResolver = user => user?.password
const titleResolver = user => user?.title
const lastNameResolver = user => user?.lastName ?? user?.lastname ?? ''
const firstNameResolver = user => user?.firstName ?? user?.firstname ?? ''
const genderResolver = user => user?.gender
const emailResolver = user => user?.email
const pictureResolver = user => {
    const picture = user?.picture ?? ''
    if (picture.includes('https://api.randomuser.me/0.2')) {
        return picture.replace('https://api.randomuser.me/0.2', 'https://randomuser.me/api')
    }
    return picture
}
const URLResolver = user => user?.URL
const addressResolver = user => user?.address

// Utilitary array so I can resolve all user data at once
const userResolverArray = [
    userIdResolver,
    loginResolver,
    passwordResolver,
    titleResolver,
    lastNameResolver,
    firstNameResolver,
    genderResolver,
    emailResolver,
    pictureResolver,
    URLResolver,
    addressResolver
]

// Mapper function responsible for resolving and adjusting user data
const userMapper = user => {
    const [
        userId,
        login,
        password,
        title,
        lastName,
        firstName,
        gender,
        email,
        picture,
        URL,
        address
    ] = userResolverArray.map(func => func(user))

    return {
        userId,
        login,
        password,
        title,
        lastName,
        firstName,
        gender,
        email,
        picture,
        URL,
        address
    }
}

const userExistsOnList = (oldList = []) => user =>
    !oldList.find(oldUser => oldUser?.userId === user?.userId || oldUser?.email === user?.email)

// Function eliminates duplicates based on `userId` and `email`
const filterUsers = (oldUsers = [], newUsers = []) => {
    if (!oldUsers.length) return newUsers
    if (!newUsers.length) return oldUsers

    return newUsers.filter(userExistsOnList(oldUsers))
}

export const useUserResolverData = (_users = []) => {
    const [users, setUsers] = useState(_users.map(userMapper))

    const resolveUsers = (rawUsers = []) => {
        const uniqueUsers = filterUsers(users, rawUsers.map(userMapper))

        if (uniqueUsers.length) {
            setUsers([...users, ...uniqueUsers])
        }
    }

    return {
        users,
        resolveUsers
    }
}

export default useUserResolverData

import { uuid } from '@/utils'

const userMapper = user => ({
    userId: user?.userId || uuid(),
    login: user?.login,
    password: user?.password,
    title: user?.title,
    lastName: user?.lastName,
    firstName: user?.firstName,
    gender: user?.gender,
    email: user?.email,
    picture: user?.picture,
    URL: user?.URL,
    address: user?.address
})

export const resolver = dataset => dataset.map(userMapper)

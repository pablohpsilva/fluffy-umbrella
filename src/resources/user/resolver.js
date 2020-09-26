import { uuid } from '@/utils'

// https://randomuser.me/api/portraits/women/2.jpg
// https://api.randomuser.me/0.2/portraits/women/0.jpg

const pictureResolver = (picture = '') => {
    if (picture.includes('https://api.randomuser.me/0.2')) {
        return picture.replace('https://api.randomuser.me/0.2', 'https://randomuser.me/api')
    }
    return picture
}

const userMapper = user => ({
    userId: user?.userId || uuid(),
    login: user?.login,
    password: user?.password,
    title: user?.title,
    lastName: user?.lastName ?? user?.lastname ?? '',
    firstName: user?.firstName ?? user?.firstname ?? '',
    gender: user?.gender,
    email: user?.email,
    picture: pictureResolver(user?.picture),
    URL: user?.URL,
    address: user?.address
})

export const resolver = dataset => dataset.map(userMapper)

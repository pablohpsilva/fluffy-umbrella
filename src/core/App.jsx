import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

import { Sample } from '@/pages'

const App = () => (
    <ToastProvider autoDismiss autoDismissTimeout={2000} placement="top-center">
        <Sample />
    </ToastProvider>
)

export default App

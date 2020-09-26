import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

import { Home } from '@/pages'

const App = () => (
    <ToastProvider autoDismiss autoDismissTimeout={2000} placement="top-center">
        <Home />
    </ToastProvider>
)

export default App

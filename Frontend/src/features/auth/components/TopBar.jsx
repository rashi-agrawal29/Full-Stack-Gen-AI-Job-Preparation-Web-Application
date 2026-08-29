import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'

const TopBar = () => {
    const { handleLogout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        try {
            await handleLogout()
        } catch (err) {
            console.log(err)
        } finally {
            navigate('/login')
        }
    }

    return (
        <div className='topbar'>
            <button
                onClick={onLogout}
                className='button primary-button logout-btn'
            >
                Logout
            </button>
        </div>
    )
}

export default TopBar

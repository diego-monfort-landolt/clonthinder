import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import logo from './images/logo.png'
import './stylesheet/header.css'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


const Headers = () => {

    return (
        <>
            <div className='header'>

                <Link to='/user' >
                    <IconButton>
                        <Person2Icon className='header__icon' fontSize='large' />
                    </IconButton>
                </Link>

                <Link to='/'>
                    <img src={logo} className='header__logo' alt='logo' />
                </Link>

                <Link to='/chats'>
                    <IconButton>
                        <ForumIcon className='header__icon' fontSize='large' />
                    </IconButton>
                </Link>


            </div>
        </>
    )
}

export default Headers
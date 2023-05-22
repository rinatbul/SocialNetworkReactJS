import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__img}
                src="https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg?compress=1&resize=80x80"
                alt="Logo"/>
        </header>

    )
}

export default Header;
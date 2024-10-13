import React from "react";
import "./header.css";

const Header = ({ className }) => {
    return (
        <header className={className}>
            <div>Шапка. Тут будет лого, кнопки авторизации, меню и т.д.: Всё, что до картинки.</div>
            <hr />
            <div> Не забудьте разделить на два div-a, как в фигме.</div>
        </header>
    );
};

export default Header;
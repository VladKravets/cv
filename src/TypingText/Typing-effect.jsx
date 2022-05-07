import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './TypingText.module.scss';

export const TypingEffect = () => {

    return (
        <ReactTypingEffect
            className={`${s.textIntro} ${s.textIntroAccent}`}
            speed={80}
            eraseSpeed={30}
            eraseDelay={3000}
            text={["Front-End developer"]}
            cursor=''
        />
    );
}
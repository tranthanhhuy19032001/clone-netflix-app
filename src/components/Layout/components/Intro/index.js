import { useState } from 'react';
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';

import classNames from 'classnames/bind';
import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

function Intro(props) {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className={cx('header-intro-video')}>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                // url="https://vimeo.com/83409369"
                url="https://vimeo.com/34122764"
                className={cx('videoIntro')}
            />
            <div className={cx('infoIntro')}>
                <h1 className={cx('heading')}>Netflix Elite</h1>
                <p className={cx('overview')}>
                    {
                        'Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production Company: Awake Film Agency: Akqa'
                    }
                </p>
            </div>

            {isMuted ? (
                <VscMute className={cx('btnVolume')} onClick={() => setIsMuted((prev) => !prev)} />
            ) : (
                <VscUnmute className={cx('btnVolume')} onClick={() => setIsMuted((prev) => !prev)} />
            )}

            <div className={cx('fadeBottom')}></div>
        </div>
    );
}

export default Intro;

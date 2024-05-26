import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
const NavBar = () => {
    return (
        <nav className="bar">
            <div className="tools">
                <Link href="/" legacyBehavior>
                    <a>
                        <ReadMoreIcon fontSize='large'/>
                        
                    </a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className="router-link-active icon-Image">
                        <SearchIcon />
                        {/* <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-remover"></use>
                        </svg> */}
                        <p>Search</p>
                    </a>
                </Link>
                <Link href="/splitter-ai" legacyBehavior>
                    <a className='icon-Image'>
                        <SettingsIcon />
                        <p>Settings</p>

                    </a>
                </Link>
                <Link href="/pitch" legacyBehavior>
                    <a className='icon-Image'>
                        <AddToQueueIcon />
                        <p>Media</p>
                    </a>
                </Link>
                <Link href="/key-bpm-finder" legacyBehavior>
                    <a className='icon-Image'>
                        <AudiotrackIcon />
                        <p>Audio</p>
                    </a>
                </Link>
                <Link href="/cutter" legacyBehavior>
                    <a className="router-link-active router-link-exact-active icon-Image" aria-current="page">
                        <FormatColorTextIcon />
                        <p>Text</p>
                    </a>
                </Link>
                <Link href="/joiner" legacyBehavior>
                    <a className='icon-Image'>
                        <VideoCameraBackIcon />
                        <p>Recorder</p>
                    </a>
                </Link>

            </div>
            <div className="help">
                <Link href="/support" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="1.75em" height="1.75em" fill="currentColor" stroke="currentColor">
                            <use xlinkHref="#icon-menu-help"></use>
                        </svg>
                        <div className="t">Support</div>
                    </a>
                </Link>
                <button className="link">
                    <svg aria-hidden="true" width="2em" height="2em" fill="currentColor" stroke="">
                        <use xlinkHref="#icon-flag-en_GB"></use>
                    </svg>
                    <div className='f'>Flag</div>
                </button>
            </div>
            <div className="help">
                <Link href="/support" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="1.75em" height="1.75em" fill="currentColor" stroke="currentColor">
                            <use xlinkHref="#icon-menu-help"></use>
                        </svg>
                        <div className="t">Support</div>
                    </a>
                </Link>
                <button className="link">
                    <svg aria-hidden="true" width="2em" height="2em" fill="currentColor" stroke="">
                        <use xlinkHref="#icon-flag-en_GB"></use>
                    </svg>
                    <div className='f'>Flag</div>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;

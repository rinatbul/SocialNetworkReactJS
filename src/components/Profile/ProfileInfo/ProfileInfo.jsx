import React from "react";
import s from './ProfileInfo.module.css';




const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileInfo}>
                <img
                    src="https://www.cathaypacific.com/content/dam/destinations/amsterdam/cityguide-gallery/amsterdam-houses-apartments-920x500.jpg"
                    alt="Picture"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
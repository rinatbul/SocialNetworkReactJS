import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";




const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <img
                    src="https://www.cathaypacific.com/content/dam/destinations/amsterdam/cityguide-gallery/amsterdam-houses-apartments-920x500.jpg"
                    alt="Picture"/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
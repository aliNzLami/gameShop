import { createContext, useState } from "react";

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

    const [profile, setProfile] = useState({});

    const updateProfile = (newList) => {        
        if(newList === null) {
            localStorage.removeItem("profile");
        }
        else {
            localStorage.setItem("profile", JSON.stringify(newList));
            setLocalProfile();
        }
    }

    const setLocalProfile = () => {
        const itemList = localStorage.getItem("profile");
        itemList ? setProfile(JSON.parse(itemList)) : setProfile(null)
    }

    const value = {
        profile,
        setLocalProfile,
        updateProfile
    }

    return (
        <ProfileContext.Provider value={value}>
            { props.children }
        </ProfileContext.Provider>
    )
}


export default ProfileContextProvider;
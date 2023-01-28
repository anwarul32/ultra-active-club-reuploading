import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <div className='profile'>
            <img src="https://i.ibb.co/cD5hCrQ/photo-1633332755192-727a05c4013d-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-M.jpg" alt='User-image' className='profile-img' />
            <h2  className='profile-name'>Kamrul Hassan</h2>
            </div>
            
        </div>
    );
};

export default Profile;
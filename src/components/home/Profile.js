import React from 'react';
import { FaLinkedin, FaInstagramSquare, FafacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';


const Profile = () => {
  return (
    <>
        <div className='profile-container'>            
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='#'>
                            <FaSquareXTwitter />                            
                        </a>
                        <a href='#'>
                            <FaLinkedin />                            
                        </a>
                        <a href='#'>
                            <FaInstagramSquare />                            
                        </a>
                        <a href='#'>
                            <FafacebookSquare />                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile

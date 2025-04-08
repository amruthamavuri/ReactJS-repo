import React from 'react';

const user = {
    name : "Albert Einstein",
    imageurl : "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/672de4205a2309001e098f8d.jpg",
    imageSize : 200
}

function Profile()
{
    return(
        <div>
            <h1>{user.name}</h1>
            <img
            src={user.imageurl}
            alt={'Photo of '+user.name}
            style = {{
            width : user.imageSize,
            height : user.imageSize
            }}
            />
        </div>
    );
}

export default Profile;
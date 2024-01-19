import React from "react";
import img8 from '../images/prifilepic.jpeg'
// import { useState } from "react";
const Editprofile = () => {
    return (
        <>
            <div>
                <img class="imgg" src={img8} alt="" />
            </div>
            <section class="gapp">
                <div>
                    <label for="name">First Name: </label>
                    <input class="inp" type="text" name="name" id="name" />
                </div>
                <div>
                    <label for="name">Email: </label>
                    <input class="inp" type="mail" name="name" id="name" />
                </div>
                <div>
                    <label for="name">Bio: </label>
                    <input class="inp" type="Bio" name="name" id="name" />
                </div>
                <div>
                    <label for="name">Location: </label>
                    <input class="inp" type="location" name="name" id="name" />
                </div>
                <div>
                    <button class="button1">Save</button>
                    <button class="button2">Cancel</button>
                </div>
            </section>
        </>
    );
};
export default Editprofile;
// const EditProfile = ({ user, updateUser }) => {
//     const [name, setName] = useState(user.name);
//     const [email, setEmail] = useState(user.email);

//     const handleUpdate = () => {
//         // You can perform any necessary validation or API calls here
//         // For simplicity, we'll just update the user in the state
//         updateUser({ name, email });
//     };

//     return (
//         <div>
//             <h2>Edit Profile Page</h2>
//             <label>Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             <br />
//             <label>Email:</label>
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <br />
//             <button onClick={handleUpdate}>Update Profile</button>
//         </div>
//     );
// };
// export default EditProfile;

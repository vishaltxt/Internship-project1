import React from "react";
import img8 from '../images/prifilepic.jpeg'

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

import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "../public/profile.css";

export const Profile = () => {
  return (
    <>
      <main className="profile">
        <div className="profile__wrapper">
          <div className="profile__img-container">
            <img
              className="profile__img"
              src="https://pbs.twimg.com/profile_images/1717245025505914880/hmTsV_yO_400x400.jpg"
              alt=""/>
          </div>
          <div className="profile__data-container">
            <div className="profile__data">
              <div className="profile__description">
                <h1 className="profile__title">Federico Zamora</h1>
                <Typewriter
                  words={["Web Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Harum, nesciunt accusamus natus tempore fugit magni dolor,
                  necessitatibus optio eaque voluptatem, inventore temporibus.
                  Odit tempore, voluptate sunt molestiae exercitationem ex
                  animi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

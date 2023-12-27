import React, { useState, useEffect } from "react";
import api from "../../../Services/Axios";
import Sidebar from "./Sidebar";

function UserProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveChanges = async () => {
    try {
      // Make a request to save the changes to the backend (replace with your actual API endpoint)
      await api.put("/user/profile", userData);
      setIsEditMode(false);
    } catch (error) {
      console.error("Error saving changes:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/lawyer");
        const user = response.data;

        setUserData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          password: user.password,  
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error as needed
      }
    };

    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  return (
    <div className="col-lg-5 mx-auto text-center">
      <Sidebar></Sidebar>

      <div className="breadcrumb-content">
        <div className="section-heading">
          <h2 className="sec__title font-size-30 text-white">Settings</h2>
        </div>
      </div>

      <div className="form-box">
        {/* ... Other HTML code ... */}

        <div className="form-title-wrap">
          <h3 className="title"> Profile</h3>
        </div>

        <div className="form-content">
          {/* ... Other HTML code ... */}
          <div className="contact-form-action">
            {isEditMode ? (
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">First Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={userData.firstName}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Last Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={userData.lastName}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="email"
                          value={userData.email}
                          onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="password"
                          value={userData.password}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button
                        className="theme-btn"
                        type="button"
                        onClick={handleSaveChanges}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div>
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">First Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={userData.firstName}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Last Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          value={userData.lastName}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="email"
                          value={userData.email}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="password"
                          value="password"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button
                        className="theme-btn"
                        type="button"
                        onClick={handleEditClick}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

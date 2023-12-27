import React from "react";

function Setting() {
  return (
    <div>
      <div className="col-lg-6">
        <div className="form-box">
          <div className="dashboard-bread dashboard--bread">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Settings
                      </h2>
                    </div>
                  </div>
                  {/* end breadcrumb-content */}
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="/" className="text-white">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="Dashboard" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="/" className="text-white">
                          Setting
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end breadcrumb-list */}
                </div>
                {/* end col-lg-6 */}
              </div>
              {/* end row */}
            </div>
          </div>

          <div className="form-title-wrap">
            <h3 className="title">Personal Information</h3>
          </div>
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-4">
              <div className="user-pro-img">
                <img src="../images/team/team-3.jpg" alt="user-image" />
              </div>
              <div className="upload-btn-box">
                <p className="pb-2 font-size-15 line-height-24">
                  Max file size is 5MB, Minimum dimension: 150x150 And Suitable
                  files are .jpg &amp; .png
                </p>
                <div className="file-upload-wrap file-upload-wrap-2">
                  <div className="MultiFile-wrap" id="MultiFile1">
                    <input
                      type="file"
                      name="files[]"
                      className="multi file-upload-input with-preview MultiFile-applied"
                      maxLength={1}
                      id="MultiFile1"
                      defaultValue=""
                    />
                    <div className="MultiFile-list" id="MultiFile1_list" />
                  </div>
                  <span className="file-upload-text">
                    <i className="la la-upload mr-2" />
                    Upload Image
                  </span>
                  <a href="#" className="theme-btn theme-btn-small">
                    Remove Image
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-action">
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
                          defaultValue="Ali"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Last Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Tufan"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Email Address</label>
                      <div className="form-group">
                        <span className="la la-envelope form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="alitufan@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Phone number</label>
                      <div className="form-group">
                        <span className="la la-phone form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="+01 4561 3214"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}

                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Address</label>
                      <div className="form-group">
                        <span className="la la-map form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="8800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A."
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button className="theme-btn" type="button">
                        Save Changes
                      </button>
                    </div>
                  </div>
                  {/* end col-lg-12 */}
                </div>
                {/* end row */}
              </form>
            </div>
          </div>
        </div>
        {/* end form-box */}
      </div>
      <div className="col-lg-6">
        <div className="form-box">
          <div className="form-title-wrap">
            <h3 className="title">Change Password</h3>
          </div>
          <div className="form-content">
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Current Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Current password"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">New Password</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          placeholder="New password"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">New Password Again</label>
                      <div className="form-group">
                        <span className="la la-lock form-icon" />
                        <input
                          className="form-control"
                          type="text"
                          placeholder="New password again"
                        />
                      </div>
                    </div>
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button className="theme-btn" type="button">
                        Change Password
                      </button>
                    </div>
                  </div>
                  {/* end col-lg-12 */}
                </div>
                {/* end row */}
              </form>
            </div>
          </div>
        </div>
        {/* end form-box */}
      </div>
    </div>
  );
}

export default Setting;

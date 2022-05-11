import React from 'react'
import '../components/registrationlogin/registrationlogin.css'
import '../components/registrationlogin/RegistrationLogin.js'

const RegistrationLogin = () => {
    var toggle = () => {
        let container = document.getElementById('container')

        container.classList.toggle('sign-in')
        container.classList.toggle('sign-up')

    }
    // setTimeout(() => {
    //     let container = document.getElementById('container')
    //     container.classList.add('sign-in')
    // }, 200)
    return (
        <>
            <div id="container" className="container1">
                {/* FORM SECTION */}
                <div className="roww">
                    {/* SIGN UP */}
                    <div className="coll align-items-center flex-coll sign-up">
                        <div className="formm-wrapper align-items-center">
                            <div className="formm sign-up">
                                <div className="input-grp">
                                    <i className="bx bxs-user" />
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-group">
                                    <i className="bx bx-mail-send" />
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-grp">
                                    <i className="bx bxs-lock-alt" />
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input-grp">
                                    <i className="bx bxs-lock-alt" />
                                    <input type="password" placeholder="Confirm password" />
                                </div>
                                <button>Sign up</button>
                                <p>
                                    <span>Already have an account?</span>
                                    <b onClick={toggle} className="pointer">
                                        Sign in here
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="formm-wrapper">
                            <div className="social-lstalign-items-center sign-up">
                                <div className="align-items-center facebook-bg">
                                    <i className="bx bxl-facebook" />
                                </div>
                                <div className="align-items-center google-bg">
                                    <i className="bx bxl-google" />
                                </div>
                                <div className="align-items-center twitter-bg">
                                    <i className="bx bxl-twitter" />
                                </div>
                                <div className="align-items-center insta-bg">
                                    <i className="bx bxl-instagram-alt" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END SIGN UP */}
                    {/* SIGN IN */}
                    <div className="coll align-items-center flex-coll sign-in">
                        <div className="formm-wrapper align-items-center">
                            <div className="formm sign-in">
                                <div className="input-grp">
                                    <i className="bx bxs-user" />
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-grp">
                                    <i className="bx bxs-lock-alt" />
                                    <input type="password" placeholder="Password" />
                                </div>
                                <button>Sign in</button>
                                <p>
                                    <b>Forgot password?</b>
                                </p>
                                <p>
                                    <span>Don't have an account?</span>
                                    <b onClick={toggle} className="pointer">
                                        Sign up here
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="formm-wrapper">
                            <div className="social-lstalign-items-center sign-in">
                                <div className="align-items-center facebook-bg">
                                    <i className="bx bxl-facebook" />
                                </div>
                                <div className="align-items-center google-bg">
                                    <i className="bx bxl-google" />
                                </div>
                                <div className="align-items-center twitter-bg">
                                    <i className="bx bxl-twitter" />
                                </div>
                                <div className="align-items-center insta-bg">
                                    <i className="bx bxl-instagram-alt" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END SIGN IN */}
                </div>
                {/* END FORM SECTION */}
                {/* CONTENT SECTION */}
                <div className="roww content-roww">
                    {/* SIGN IN CONTENT */}
                    <div className="coll align-items-center flex-coll">
                        <div className="texts sign-in">
                            <h2>Welcome back</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
                                obcaecati, accusantium molestias, laborum, aspernatur deserunt officia
                                voluptatum tempora dicta quo ab ullam. Assumenda enim harum minima
                                possimus dignissimos deserunt rem.
                            </p>
                        </div>
                        <div className="imgg sign-in">
                            <img src="tua-react-admin/src/assets/undraw_different_love_a3rg.svg" alt="welcome" />
                        </div>
                    </div>
                    {/* END SIGN IN CONTENT */}
                    {/* SIGN UP CONTENT */}
                    <div className="coll align-items-center flex-col">
                        <div className="imgg sign-up">
                            <img src="tua-react-admin\src\assets\undraw_different_love_a3rg.svg" alt="welcome" />
                        </div>
                        <div className="texts sign-up">
                            <h2>Join with us</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
                                obcaecati, accusantium molestias, laborum, aspernatur deserunt officia
                                voluptatum tempora dicta quo ab ullam. Assumenda enim harum minima
                                possimus dignissimos deserunt rem.
                            </p>
                        </div>
                    </div>
                    {/* END SIGN UP CONTENT */}
                </div>
                {/* END CONTENT SECTION */}
            </div>

        </>

    )
}

export default RegistrationLogin

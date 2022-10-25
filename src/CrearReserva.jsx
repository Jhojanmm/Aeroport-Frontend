import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./Register.css";




export default function CrearReserva() {

    const [regDetails, setRegDetails] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
    });
    const users = 3;

    return (

        <>
            <div className="login-container">
                <div class="area">
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <h2 style={{ textAlign: "center" }}>CREATE AN ACCOUNT</h2>
                <div className="register-form-container">
                    <h6>PERSONAL INFORMATION</h6>
                    <form className="register-form">
                        <label htmlFor="">FIRST NAME</label>
                        <input
                            required
                            type="text"
                            placeholder="Enter First Name"
                            value={regDetails.first_name}
                            onChange={(e) =>
                                setRegDetails({ ...regDetails, first_name: e.target.value })
                            }
                        />
                        <label htmlFor="">LAST NAME</label>
                        <input
                            required
                            type="text"
                            placeholder="Enter Last Name"
                            value={regDetails.last_name}
                            onChange={(e) =>
                                setRegDetails({ ...regDetails, last_name: e.target.value })
                            }
                        />
                        <label htmlFor="">PHONE NUMBER</label>
                        <input
                            required
                            type="tel"
                            placeholder="Enter Phone Number"
                            value={regDetails.phone}
                            onChange={(e) =>
                                setRegDetails({ ...regDetails, phone: e.target.value })
                            }
                        />
                        <label htmlFor="">USERNAME</label>
                        <input
                            required
                            type="text"
                            placeholder="Enter Username"
                            value={regDetails.username}
                            onChange={(e) =>
                                setRegDetails({ ...regDetails, username: e.target.value })
                            }
                        />
                        <label htmlFor="">E-MAIL</label>
                        <input
                            required
                            type="email"
                            placeholder="Enter E-mail"
                            value={regDetails.email}
                            onChange={(e) =>
                                setRegDetails({ ...regDetails, email: e.target.value })
                            }
                        />
                        <label htmlFor="">PASSWORD</label>
                        <input
                            required
                            type="password"
                            placeholder="Enter Password"
                            value={regDetails.password}
                            onChange={(e) =>
                                setRegDetails({ ...regDetails, password: e.target.value })
                            }
                        />
                        <Button
                            style={{ marginTop: "20px" }}
                            color="primary"
                            auto
                            ghost
                        >
                            Register
                        </Button>
                        <Link to={"/login"}>Or already have an account</Link>
                    </form>
                </div>
            </div>


            {users === 2 ? (
                <div className="login-container">
                    <div class="area">
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <h2 style={{ textAlign: "center" }}>CREATE AN ACCOUNT</h2>
                    <div className="register-form-container">
                        <h6>PERSONAL INFORMATION</h6>
                        <form className="register-form">
                            <label htmlFor="">FIRST NAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter First Name"
                                value={regDetails.first_name}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, first_name: e.target.value })
                                }
                            />
                            <label htmlFor="">LAST NAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Last Name"
                                value={regDetails.last_name}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, last_name: e.target.value })
                                }
                            />
                            <label htmlFor="">PHONE NUMBER</label>
                            <input
                                required
                                type="tel"
                                placeholder="Enter Phone Number"
                                value={regDetails.phone}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, phone: e.target.value })
                                }
                            />
                            <label htmlFor="">USERNAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Username"
                                value={regDetails.username}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, username: e.target.value })
                                }
                            />
                            <label htmlFor="">E-MAIL</label>
                            <input
                                required
                                type="email"
                                placeholder="Enter E-mail"
                                value={regDetails.email}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, email: e.target.value })
                                }
                            />
                            <label htmlFor="">PASSWORD</label>
                            <input
                                required
                                type="password"
                                placeholder="Enter Password"
                                value={regDetails.password}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, password: e.target.value })
                                }
                            />
                            <Button
                                style={{ marginTop: "20px" }}
                                color="primary"
                                auto
                                ghost
                            >
                                Register
                            </Button>
                            <Link to={"/login"}>Or already have an account</Link>
                        </form>
                    </div>
                </div>

            ) : ((users === 3 ? (
                <>
                <div className="login-container">
                    <div class="area">
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <h2 style={{ textAlign: "center" }}>CREATE AN ACCOUNT</h2>
                    <div className="register-form-container">
                        <h6>PERSONAL INFORMATION</h6>
                        <form className="register-form">
                            <label htmlFor="">FIRST NAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter First Name"
                                value={regDetails.first_name}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, first_name: e.target.value })
                                }
                            />
                            <label htmlFor="">LAST NAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Last Name"
                                value={regDetails.last_name}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, last_name: e.target.value })
                                }
                            />
                            <label htmlFor="">PHONE NUMBER</label>
                            <input
                                required
                                type="tel"
                                placeholder="Enter Phone Number"
                                value={regDetails.phone}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, phone: e.target.value })
                                }
                            />
                            <label htmlFor="">USERNAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Username"
                                value={regDetails.username}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, username: e.target.value })
                                }
                            />
                            <label htmlFor="">E-MAIL</label>
                            <input
                                required
                                type="email"
                                placeholder="Enter E-mail"
                                value={regDetails.email}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, email: e.target.value })
                                }
                            />
                            <label htmlFor="">PASSWORD</label>
                            <input
                                required
                                type="password"
                                placeholder="Enter Password"
                                value={regDetails.password}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, password: e.target.value })
                                }
                            />
                            <Button
                                style={{ marginTop: "20px" }}
                                color="primary"
                                auto
                                ghost
                            >
                                Register
                            </Button>
                            <Link to={"/login"}>Or already have an account</Link>
                        </form>
                    </div>
                </div>

                <div className="login-container">
                    <div class="area">
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <h2 style={{ textAlign: "center" }}>CREATE AN ACCOUNT</h2>
                    <div className="register-form-container">
                        <h6>PERSONAL INFORMATION</h6>
                        <form className="register-form">
                            <label htmlFor="">FIRST NAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter First Name"
                                value={regDetails.first_name}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, first_name: e.target.value })
                                }
                            />
                            <label htmlFor="">LAST NAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Last Name"
                                value={regDetails.last_name}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, last_name: e.target.value })
                                }
                            />
                            <label htmlFor="">PHONE NUMBER</label>
                            <input
                                required
                                type="tel"
                                placeholder="Enter Phone Number"
                                value={regDetails.phone}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, phone: e.target.value })
                                }
                            />
                            <label htmlFor="">USERNAME</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Username"
                                value={regDetails.username}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, username: e.target.value })
                                }
                            />
                            <label htmlFor="">E-MAIL</label>
                            <input
                                required
                                type="email"
                                placeholder="Enter E-mail"
                                value={regDetails.email}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, email: e.target.value })
                                }
                            />
                            <label htmlFor="">PASSWORD</label>
                            <input
                                required
                                type="password"
                                placeholder="Enter Password"
                                value={regDetails.password}
                                onChange={(e) =>
                                    setRegDetails({ ...regDetails, password: e.target.value })
                                }
                            />
                            <Button
                                style={{ marginTop: "20px" }}
                                color="primary"
                                auto
                                ghost
                            >
                                Register
                            </Button>
                            <Link to={"/login"}>Or already have an account</Link>
                        </form>
                    </div>
                </div>
                </>
            ):(
                <h6>PERSONAL INFORMATION</h6>
            ))
                


            )}
        </>
    );
}
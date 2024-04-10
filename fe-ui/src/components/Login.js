import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }
        console.log("Login with: ", { username, password });

        // setUsername("");
        // setPassword("");
        // setErrorMessage("");
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username,
                password
            });
            if (response.data === 'Login successful') {
                // Đăng nhập thành công, điều hướng đến trang chính
                window.location.href = '/admin/AdminHome';
            } else {
                setErrorMessage("Invalid username or password");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage("Failed to login. Please try again later.");
        }
    };

    const validateForm = () => {
        if (!username.trim() || !password.trim()) {
            setErrorMessage("Please enter a valid username or password");
            return false;
        }

        return true;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm space-y-6">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="text-white appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="text-white appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="btn btn-outline btn-accent float-right"
                        >
                            Sign in
                        </button>
                    </div>
                    {/* {error && <div className="error">{error}</div>} */}
                </form>
            </div>
        </div>
    );
}

export default Login;

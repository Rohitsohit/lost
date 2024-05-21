import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from '../actions/auth';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            dispatch(signin({ email, password }, history));
        } else {
            dispatch(signup({ email, password, confirmPassword, name }, history));
        }
    };

    return (
        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
            <section className="flex flex-col space-y-6 w-full max-w-md px-4">
                <div className="text-center text-4xl font-medium" id="formTitle">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </div>

                <div className="w-full border-b-2 text-lg">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="w-full border-b-2 text-lg">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {!isLogin && (
                    <div className="w-full border-b-2 text-lg">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                )}

                {!isLogin && (
                    <div className="w-full border-b-2 text-lg">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}

                <button
                    className="rounded-sm bg-indigo-600 py-2 font-bold hover:bg-indigo-400"
                    onClick={handleSubmit}
                >
                    {isLogin ? 'LOG IN' : 'SIGN UP'}
                </button>

                {isLogin ? (
                    <a href="#" className="text-center font-semibold text-gray-500 hover:text-gray-300">
                        FORGOT PASSWORD?
                    </a>
                ) : (
                    <p className="text-center text-lg">
                        Already have an account?{' '}
                        <a
                            href="#"
                            className="font-medium text-indigo-500 hover:underline"
                            onClick={() => setIsLogin(true)}
                        >
                            Log In
                        </a>
                    </p>
                )}

                {isLogin && (
                    <p className="text-center text-lg">
                        No account?{' '}
                        <a
                            href="#"
                            className="font-medium text-indigo-500 hover:underline"
                            onClick={() => setIsLogin(false)}
                        >
                            Create One
                        </a>
                    </p>
                )}
            </section>
        </main>
    );
};

export default Auth;

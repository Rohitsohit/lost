import React, { useState } from 'react';

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            // Handle login
            console.log('Logging in with:', { username, password });
        } else {
            // Handle signup
            console.log('Signing up with:', { username, password, confirmPassword, fullName });
        }
    };

    return (
        <main className="mx-auto  flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"> {/* Added mt-20 for spacing */}
            <section className="flex w-[30rem] flex-col space-y-6">
                <div className="text-center text-4xl font-medium" id="formTitle">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {!isLogin && (
                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
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
                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                )}

                <button
                    className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                    onClick={handleSubmit}
                >
                    {isLogin ? 'LOG IN' : 'SIGN UP'}
                </button>

                {isLogin ? (
                    <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
                        FORGOT PASSWORD?
                    </a>


                ) : (
                    <p className="text-center text-lg">
                        Already have an account?{' '}
                        <a
                            href="#"
                            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
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
                            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
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

export default SignUp;

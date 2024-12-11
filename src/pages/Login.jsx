import React, { useState } from "react";

const Login = () => {
    const [state, setState] = useState("Sign Up");
    const [email, setEemail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    };

    return (
        <form action="" className="min-h-[80vh] flex items-center ">
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
                <p className="text-2xl font-semibold">
                    {state === "Sign Up" ? "Create Account" : "Login"}
                </p>

                {state === "Sign Up" ? (
                    <div className="w-full">
                        <p>Full Name</p>
                        <input
                            className="border border-zinc-300 rounded w-full p-2 mt-1 "
                            type="text"
                            onChange={(e) => setName(e.target.name)}
                            value={name}
                        />
                    </div>
                ) : (
                    <p>Please {state === "Sign Up" ? "Sign up" : "login"} to book appointment</p>
                )}

                <div className="w-full">
                    <p>Email</p>
                    <input
                        className="border border-zinc-300 rounded w-full p-2 mt-1 "
                        type="email"
                        onChange={(e) => setEemail(e.target.email)}
                        value={email}
                        required
                    />
                </div>
                <div className="w-full">
                    <p>Password</p>
                    <input
                        className="border border-zinc-300 rounded w-full p-2 mt-1 "
                        type="password"
                        onChange={(e) => setPassword(e.target.password)}
                        value={password}
                        required
                    />
                </div>
                <button className="border border-zinc-300 bg-primary text-white rounded-md text-base w-full p-2  ">
                    {state === "Sign Up" ? "Create account" : "Login"}
                </button>
                {state === "Sign Up" ? (
                    <p className="mt-1">
                        Already have an account?
                        <span
                            onClick={() => setState("Login")}
                            className="text-primary underline cursor-pointer"
                        >
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className="mt-1">
                        Create an new account?{" "}
                        <span
                            onClick={() => setState("Sign Up")}
                            className="text-primary underline cursor-pointer"
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;

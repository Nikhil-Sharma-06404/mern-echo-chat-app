import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup.js'

function SignUp() {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit =  async(e) => {
        e.preventDefault(); // prevent from again refreshing the page or redirecting
		console.log(inputs);
        await signup(inputs); // Store inputs in database and link with backend using hooks and render to home pagge
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> Echo-Chat</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-bold'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-bold'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-bold'>Password</span>
                        </label>
                        <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-bold'>Confirm Password</span>
                        </label>
                        <input type='text' placeholder='Confirm your Password' className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender = {inputs.gender} />

                    <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 text-red-500 mt-2 inline-block font-extrabold'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'
                            disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp

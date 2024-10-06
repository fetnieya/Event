"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    });
    const router = useRouter();

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/signup', formData);
            if (response.status === 201) {
                localStorage.setItem('token',JSON.stringify(response.data))
                router.push('/'); // Redirect to login page after successful signup
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="container mx-auto max-w-md p-4">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    >
                        <option value="" disabled>Select your role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-violet-600 text-white rounded hover:bg-violet-700">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

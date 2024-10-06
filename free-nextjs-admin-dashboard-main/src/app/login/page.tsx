"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');
    
    useEffect(() => {
    if(localStorage.getItem("token")){
        console.log('no token ');
        router.push("")
    }else{
        localStorage.setItem("token","TOKEN")
    }
    }, [])

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setError('');  // Reset any existing errors

        try {
            const response = await axios.post('http://localhost:8080/auth/signin', { email, password });
            const user = response.data.foundUser;
            console.log(user);
            
            if (user) {
                localStorage.setItem('token',JSON.stringify(user) );  // Store JWT token in local storage
                
                if (user.role==="admin") {
                    
                    router.push('/eventList');  // Redirect to a protected page after login
                }else{

                    router.push('/eventU');  // Redirect to a protected page after login
                }
            }
        } catch (err) {
            console.log({err});
            
            setError('Invalid email or password');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        padding: '0.75rem',
        fontSize: '1rem',
        backgroundColor: '#6200ea',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '1rem',
    },
    error: {
        marginTop: '1rem',
        color: 'red',
        fontWeight: 'bold',
    },
};

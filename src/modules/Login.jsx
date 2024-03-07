import { useState } from 'react';
import { Input, Button } from 'antd';
import { supabase } from '../Client'; // Replace with the actual path to your Supabase client
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error(error);
                toast.error("Error al iniciar sesión: " + error.message);
            } else {
                toast.success("Inicio de sesión exitoso");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error al iniciar sesión: " + error.message);
        }
    };

    const handleSignUp = async () => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error(error);
                toast.error("Error al registrarse: " + error.message);
            } else {
                toast.success("Registro exitoso");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error al registrarse: " + error.message);
        }
    };

    return (
        <div>
            <ToastContainer></ToastContainer>
            {/* Place your logo here */}
            <img src="/path/to/logo.png" alt="Logo" />

            <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input.Password
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="primary" onClick={handleLogin}>
                Login
            </Button>

            <Button onClick={handleSignUp}>
                Sign Up
            </Button>
        </div>
    );
};

export default Login;

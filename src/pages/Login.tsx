import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { ShieldAlert } from 'lucide-react';
import './Login.css';

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                // Auto-login or wait for email confirmation depends on settings.
                // Assuming email confirmations are off for this quick setup.
                alert('Sign up successful! You can now log in.');
                setIsSignUp(false);
            } else {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred during authentication.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box glass-panel text-center">
                <div className="login-logo text-primary">
                    <ShieldAlert size={48} />
                </div>
                <h1 className="login-title">Texas DMV Prep</h1>
                <p className="login-subtitle">
                    {isSignUp ? 'Create an account to save your progress.' : 'Log in to sync your studying progress.'}
                </p>

                {error && <div className="login-error">{error}</div>}

                <form onSubmit={handleAuth} className="login-form">
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            required
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            required
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="form-submit btn primary" disabled={loading}>
                        {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Log In')}
                    </button>
                </form>

                <div className="login-switch">
                    {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                    <button
                        className="switch-btn text-primary"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Log In' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

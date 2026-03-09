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
        <div className="login-container min-h-screen flex items-center justify-center p-4">
            <div className="glass-panel max-w-md w-full p-8 animate-fade-in text-center">
                <div className="flex justify-center mb-6 text-primary">
                    <ShieldAlert size={48} />
                </div>
                <h1 className="text-3xl font-bold mb-2">Texas DMV Prep</h1>
                <p className="text-gray-400 mb-8">
                    {isSignUp ? 'Create an account to save your progress.' : 'Log in to sync your studying progress.'}
                </p>

                {error && <div className="bg-error/20 border border-error/50 text-error-light p-3 rounded-md mb-6 text-sm">{error}</div>}

                <form onSubmit={handleAuth} className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-dark/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full bg-dark/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn primary w-full justify-center mt-6" disabled={loading}>
                        {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Log In')}
                    </button>
                </form>

                <div className="mt-6 text-sm text-gray-400">
                    {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                    <button
                        className="text-primary hover:underline font-medium focus:outline-none"
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

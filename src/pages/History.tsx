import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Clock, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';

interface ProgressRecord {
    id: string;
    type: 'practice_test' | 'simulator';
    score: number;
    total: number;
    passed: boolean;
    created_at: string;
    weak_categories: string[];
}

const History: React.FC = () => {
    const [records, setRecords] = useState<ProgressRecord[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) return;

            const { data, error } = await supabase
                .from('user_progress')
                .select('*')
                .eq('user_id', session.user.id)
                .order('created_at', { ascending: false });

            if (!error && data) {
                setRecords(data);
            }
            setLoading(false);
        };

        fetchHistory();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading history...</div>;
    }

    const testRecords = records.filter(r => r.type === 'practice_test');
    const simRecords = records.filter(r => r.type === 'simulator');

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto animate-fade-in relative z-10">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary" size={32} />
                Progress History
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Practice Tests */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-primary-light">
                        <Clock size={20} /> Practice Tests
                    </h2>
                    {testRecords.length === 0 ? (
                        <p className="text-gray-400 glass-panel p-6 text-center">No tests taken yet.</p>
                    ) : (
                        testRecords.map(record => (
                            <div key={record.id} className="glass-panel p-4 flex items-center justify-between border-l-4" style={{ borderLeftColor: record.passed ? 'var(--color-success)' : 'var(--color-error)' }}>
                                <div>
                                    <div className="font-bold text-lg">{record.score} / {record.total}</div>
                                    <div className="text-sm text-gray-400">{new Date(record.created_at).toLocaleDateString()} at {new Date(record.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                </div>
                                <div className="flex items-center gap-2 font-medium">
                                    {record.passed ? <span className="text-success flex items-center gap-1"><CheckCircle2 size={16} /> Passed</span> : <span className="text-error flex items-center gap-1"><XCircle size={16} /> Failed</span>}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Driving Simulator */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-primary-light">
                        <Clock size={20} /> Driving Simulator
                    </h2>
                    {simRecords.length === 0 ? (
                        <p className="text-gray-400 glass-panel p-6 text-center">No simulations driven yet.</p>
                    ) : (
                        simRecords.map(record => (
                            <div key={record.id} className="glass-panel p-4 flex items-center justify-between border-l-4" style={{ borderLeftColor: record.passed ? 'var(--color-success)' : 'var(--color-error)' }}>
                                <div>
                                    <div className="font-bold text-lg">{record.score} / {record.total}</div>
                                    <div className="text-sm text-gray-400">{new Date(record.created_at).toLocaleDateString()} at {new Date(record.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                </div>
                                <div className="flex items-center gap-2 font-medium">
                                    {record.passed ? <span className="text-success flex items-center gap-1"><CheckCircle2 size={16} /> Perfect</span> : <span className="text-warning flex items-center gap-1"><XCircle size={16} /> Needs Work</span>}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default History;

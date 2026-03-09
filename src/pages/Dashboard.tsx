import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../store/progress';
import { PlayCircle, Layers, Target, Trophy, Clock, AlertCircle, MapPin } from 'lucide-react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { bestScore, hasPassedQuiz, quizzesTaken, missedQuestions } = useProgressStore();

    const percentage = Math.round((bestScore / 30) * 100) || 0;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h2 className="greeting">Ready to drive? 🚗</h2>
                    <p className="subtitle">Let's get that learner's permit.</p>
                </div>

                {hasPassedQuiz && (
                    <div className="badge-pass glass-panel">
                        <Trophy size={20} className="text-warning" />
                        <span>Permit Ready!</span>
                    </div>
                )}
            </header>

            <section className="stats-grid">
                <div className="stat-card glass-panel">
                    <div className="stat-icon-wrapper primary">
                        <Target size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>Best Score</h3>
                        <p className="stat-value">{bestScore} <span className="stat-total">/ 30 ({percentage}%)</span></p>
                    </div>
                </div>

                <div className="stat-card glass-panel">
                    <div className="stat-icon-wrapper accent">
                        <Clock size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>Quizzes Taken</h3>
                        <p className="stat-value">{quizzesTaken}</p>
                    </div>
                </div>

                <div className="stat-card glass-panel">
                    <div className="stat-icon-wrapper error">
                        <AlertCircle size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>Topics to Review</h3>
                        <p className="stat-value">{missedQuestions.length} <span className="stat-total">questions missed</span></p>
                    </div>
                </div>
            </section>

            <h3 className="section-title">Training Modes</h3>

            <section className="modes-grid">
                <button className="mode-card primary-mode" onClick={() => navigate('/quiz')}>
                    <div className="mode-icon-wrapper">
                        <PlayCircle size={32} />
                    </div>
                    <div className="mode-content">
                        <h3>Full Practice Test</h3>
                        <p>30 questions. 70% to pass. Just like the real Texas DMV exam.</p>
                    </div>
                </button>

                <button className="mode-card secondary-mode" onClick={() => navigate('/flashcards')}>
                    <div className="mode-icon-wrapper">
                        <Layers size={32} />
                    </div>
                    <div className="mode-content">
                        <h3>Sign Flashcards</h3>
                        <p>Learn to recognize Texas road signs instantly.</p>
                    </div>
                </button>

                <button className="mode-card accent-mode" onClick={() => navigate('/driving')}>
                    <div className="mode-icon-wrapper">
                        <MapPin size={32} />
                    </div>
                    <div className="mode-content">
                        <h3>Driving Simulator</h3>
                        <p>Take a virtual road trip through real Texas driving scenarios.</p>
                    </div>
                </button>

                <button className="mode-card warning-mode" onClick={() => navigate('/review')} disabled={missedQuestions.length === 0}>
                    <div className="mode-icon-wrapper">
                        <AlertCircle size={32} />
                    </div>
                    <div className="mode-content">
                        <h3>Weak Areas</h3>
                        <p>{missedQuestions.length > 0 ? `Review the ${missedQuestions.length} questions you missed.` : 'You have no missed questions yet! Take a test first.'}</p>
                    </div>
                </button>
            </section>
        </div>
    );
};

export default Dashboard;

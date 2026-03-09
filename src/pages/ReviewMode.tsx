import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../store/progress';
import { questions } from '../data/questions';
import { Home, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import './ReviewMode.css';

const ReviewMode: React.FC = () => {
    const navigate = useNavigate();
    const { missedQuestions, weakCategories } = useProgressStore();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const reviewQuestions = questions.filter(q => missedQuestions.includes(q.id));

    if (reviewQuestions.length === 0) {
        return (
            <div className="review-empty">
                <CheckCircle2 size={64} className="text-success mb-4" />
                <h2>You're all caught up!</h2>
                <p>You haven't missed any questions yet, or you cleared your review list.</p>
                <button className="btn primary mt-8" onClick={() => navigate('/')}>
                    <Home size={20} /> Back to Dashboard
                </button>
            </div>
        );
    }

    const currentQuestion = reviewQuestions[currentIndex];

    const handleNext = () => {
        setShowAnswer(false);
        if (currentIndex < reviewQuestions.length - 1) {
            setCurrentIndex(c => c + 1);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="review-container">
            <div className="review-header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    <Home size={20} /> Dashboard
                </button>
                <div className="review-progress">
                    Reviewing {currentIndex + 1} of {reviewQuestions.length}
                </div>
            </div>

            <div className="weak-areas-summary glass-panel">
                <h3><AlertCircle size={20} className="inline mr-2 text-warning" /> Your Weakest Categories</h3>
                <div className="category-tags">
                    {Object.entries(weakCategories)
                        .filter(([_, count]) => count > 0)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 3)
                        .map(([category, count]) => (
                            <span key={category} className="category-tag">
                                {category} <span className="count-badge">{count} misses</span>
                            </span>
                        ))
                    }
                </div>
            </div>

            <div className="review-card glass-panel">
                <span className="category-badge warning">{currentQuestion.category}</span>
                <h2 className="question-text">{currentQuestion.question}</h2>

                {!showAnswer ? (
                    <div className="think-box">
                        <p className="think-prompt">Think about the answer before revealing it...</p>
                        <button className="btn primary reveal-btn" onClick={() => setShowAnswer(true)}>
                            Reveal Correct Answer
                        </button>
                    </div>
                ) : (
                    <div className="answer-reveal animation-fade-in">
                        <div className="correct-answer-box">
                            <h4 className="box-title">Correct Answer:</h4>
                            <p className="box-content">{currentQuestion.options[currentQuestion.correctAnswer]}</p>
                        </div>

                        <div className="explanation-box success mt-4">
                            <div className="explanation-header">
                                <h3>AI Explanation</h3>
                            </div>
                            <p className="explanation-text">{currentQuestion.explanation}</p>
                        </div>

                        <button className="btn primary mt-6 w-full justify-center" onClick={handleNext}>
                            {currentIndex === reviewQuestions.length - 1 ? 'Finish Review' : 'Next Question'}
                            <ArrowRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewMode;

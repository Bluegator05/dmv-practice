import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { useProgressStore } from '../store/progress';
import { CheckCircle2, XCircle, ArrowRight, Home, RefreshCw } from 'lucide-react';
import './Quiz.css';

// Utility to shuffle questions
const shuffle = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const Quiz: React.FC = () => {
    const navigate = useNavigate();
    const { recordScore, recordMissedQuestion } = useProgressStore();

    // Pick exactly 30 questions (since we have exactly 30, it just shuffles them)
    const quizQuestions = useMemo(() => shuffle(questions).slice(0, 30), []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const currentQuestion = quizQuestions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

    const handleSelectOption = (index: number) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);

        if (index === currentQuestion.correctAnswer) {
            setScore(s => s + 1);
        } else {
            recordMissedQuestion(currentQuestion.id, currentQuestion.category);
        }
    };

    const handleNext = () => {
        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex(c => c + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            // Finish Quiz
            const passed = score >= 21; // 70% of 30
            recordScore(score, passed);
            setQuizFinished(true);
        }
    };

    if (quizFinished) {
        const passed = score >= 21;
        const percentage = Math.round((score / quizQuestions.length) * 100);

        return (
            <div className="results-container glass-panel">
                <div className={`results-icon ${passed ? 'text-success' : 'text-error'}`}>
                    {passed ? <CheckCircle2 size={64} /> : <XCircle size={64} />}
                </div>
                <h2 className="results-title">{passed ? 'You Passed!' : 'Requires Practice'}</h2>
                <p className="results-score">{score} / {quizQuestions.length}</p>
                <p className="results-desc">
                    {passed
                        ? "Outstanding! You scored 70% or higher and are ready for the permit test."
                        : `You scored ${percentage}%. You need 70% (21 correct) to pass. Review your weak areas and try again!`}
                </p>

                <div className="results-actions">
                    <button className="btn primary" onClick={() => window.location.reload()}>
                        <RefreshCw size={20} />
                        Try Again
                    </button>
                    <button className="btn secondary" onClick={() => navigate('/')}>
                        <Home size={20} />
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    if (!currentQuestion) return null;

    const progressPercentage = ((currentIndex) / quizQuestions.length) * 100;

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <div className="quiz-progress-text">
                    <span>Question {currentIndex + 1} of {quizQuestions.length}</span>
                    <span>Score: {score}</span>
                </div>
                <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>

            <div className="question-card glass-panel">
                <span className="category-badge">{currentQuestion.category}</span>
                <h2 className="question-text">{currentQuestion.question}</h2>

                <div className="options-grid">
                    {currentQuestion.options.map((option, index) => {
                        let optionClass = 'option-btn';

                        if (isAnswered) {
                            if (index === currentQuestion.correctAnswer) {
                                optionClass += ' correct';
                            } else if (index === selectedAnswer) {
                                optionClass += ' incorrect';
                            } else {
                                optionClass += ' disabled';
                            }
                        }

                        return (
                            <button
                                key={index}
                                className={optionClass}
                                onClick={() => handleSelectOption(index)}
                                disabled={isAnswered}
                            >
                                <div className="option-letter">{String.fromCharCode(65 + index)}</div>
                                <div className="option-text">{option}</div>
                            </button>
                        );
                    })}
                </div>

                {isAnswered && (
                    <div className={`explanation-box ${isCorrect ? 'success' : 'error'}`}>
                        <div className="explanation-header">
                            {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                            <h3>{isCorrect ? 'Correct!' : 'Incorrect'}</h3>
                        </div>
                        <p className="explanation-text"><strong style={{ color: 'var(--color-primary-light)' }}>AI Instructor:</strong> {currentQuestion.explanation}</p>
                    </div>
                )}

            </div>

            <div className="quiz-footer">
                <button className="btn secondary" onClick={() => navigate('/')}>Quit</button>

                {isAnswered && (
                    <button className="btn primary next-btn" onClick={handleNext}>
                        {currentIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        <ArrowRight size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;

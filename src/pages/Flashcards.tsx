import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signs } from '../data/signs';

import { ArrowLeft, ArrowRight, Home, RotateCcw } from 'lucide-react';
import './Flashcards.css';

const Flashcards: React.FC = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentSign = signs[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % signs.length);
        }, 150); // slight delay to flip back before changing content
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? signs.length - 1 : prev - 1));
        }, 150);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flashcards-container">
            <div className="flashcards-header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    <Home size={20} /> Dashboard
                </button>
                <div className="flashcard-progress">
                    Card {currentIndex + 1} of {signs.length}
                </div>
            </div>

            <div className="flashcard-wrapper" onClick={handleFlip}>
                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flashcard-inner relative w-full h-full">

                        {/* Front of Card */}
                        <div className="flashcard-front glass-panel">
                            <div className="flashcard-content-center image-container">
                                <img
                                    src={currentSign.imageUrl}
                                    alt={currentSign.name}
                                    className="sign-image drop-shadow-lg"
                                />
                            </div>
                            <div className="flip-hint">
                                <RotateCcw size={16} /> Tap to flip
                            </div>
                        </div>

                        {/* Back of Card */}
                        <div className="flashcard-back glass-panel">
                            <div className="flashcard-content-center">
                                <h3 className="sign-name">{currentSign.name}</h3>
                                <p className="sign-description">{currentSign.description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flashcards-controls">
                <button className="nav-btn left-btn" onClick={handlePrev}>
                    <ArrowLeft size={24} />
                    Previous
                </button>
                <button className="nav-btn right-btn" onClick={handleNext}>
                    Next
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Flashcards;

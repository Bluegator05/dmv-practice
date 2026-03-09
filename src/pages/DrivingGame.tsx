import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scenarios } from '../data/scenarios';
import type { ScenarioChoice } from '../data/scenarios';
import { Home, ShieldAlert, CheckCircle2, XCircle, ArrowRight, Gauge } from 'lucide-react';
import './DrivingGame.css';

// Utility to shuffle scenarios
const shuffle = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const DrivingGame: React.FC = () => {
    const navigate = useNavigate();

    // Randomize scenarios on mount
    const randomizedScenarios = React.useMemo(() => shuffle(scenarios), []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);
    const [score, setScore] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [isDriving, setIsDriving] = useState(false);

    // Briefly animate "driving" to the next scenario
    const handleTransitionToNext = () => {
        setIsDriving(true);
        setTimeout(() => {
            setIsDriving(false);
            if (currentIndex < randomizedScenarios.length - 1) {
                setCurrentIndex(c => c + 1);
                setSelectedChoice(null);
            } else {
                setGameFinished(true);
            }
        }, 1200); // Shorter drive transition
    };

    const scenario = randomizedScenarios[currentIndex];

    const handleSelectAction = (choice: ScenarioChoice) => {
        if (selectedChoice) return;
        setSelectedChoice(choice);
        if (choice.isCorrect) setScore(s => s + 1);
    };

    if (gameFinished) {
        const passed = score >= Math.ceil(randomizedScenarios.length * 0.7);
        return (
            <div className="game-results glass-panel absolute-center z-50">
                <h2>Trip Complete!</h2>
                <p className="score-text">You earned {score} out of {randomizedScenarios.length} safe driving points.</p>
                <p className="feedback-text">
                    {passed
                        ? "Great driving! You're clearly ready for the road."
                        : "You had a few close calls. Review scenarios and try again!"}
                </p>
                <div className="flex gap-4 justify-center mt-8">
                    <button className="btn primary" onClick={() => window.location.reload()}>Drive Again</button>
                    <button className="btn secondary" onClick={() => navigate('/')}><Home size={20} /> Dashboard</button>
                </div>
            </div>
        );
    }

    return (
        <div className="simulator-wrapper">

            {/* Static Realistic Image Background or Transition */}
            <div className={`road-environment ${isDriving ? 'driving-transition' : ''}`}
                style={!isDriving ? {
                    backgroundImage: `url(${scenario.bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : { background: 'black' }}>
                {isDriving && <div className="driving-blur-text">Driving...</div>}
            </div>

            <button className="btn secondary back-btn-overlay" onClick={() => navigate('/')}>
                <Home size={18} /> Exit Car
            </button>

            {/* Windshield View Content (HUD) */}
            <div className={`windshield-hud ${isDriving ? 'hide-hud' : 'show-hud'} overflow-y-auto`}>
                <div className="hud-header">
                    <div className="hud-badge"><ShieldAlert size={16} /> {scenario.type.toUpperCase()} SCENARIO</div>
                    <div className="hud-progress">Scenario {currentIndex + 1} / {randomizedScenarios.length}</div>
                </div>

                <div className="scenario-prompt-box glass-panel">
                    <h2 className="text-2xl font-bold mb-2">{scenario.title}</h2>
                    <p className="text-lg opacity-90">{scenario.description}</p>
                </div>

                {/* Choices projected onto windshield */}
                <div className="choices-grid">
                    {scenario.choices.map((choice) => {
                        let btnClass = 'choice-btn glass-panel';
                        if (selectedChoice) {
                            if (choice.id === selectedChoice.id) {
                                btnClass += choice.isCorrect ? ' correct' : ' incorrect';
                            } else if (choice.isCorrect) {
                                btnClass += ' highlight';
                            } else {
                                btnClass += ' dimmed';
                            }
                        }

                        return (
                            <button
                                key={choice.id}
                                className={btnClass}
                                onClick={() => handleSelectAction(choice)}
                                disabled={!!selectedChoice}
                            >
                                <span>{choice.text}</span>
                                {selectedChoice && choice.id === selectedChoice.id && (
                                    choice.isCorrect ? <CheckCircle2 className="text-success ml-2" /> : <XCircle className="text-error ml-2" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {selectedChoice && (
                    <div className={`feedback-hud ${selectedChoice.isCorrect ? 'positive' : 'negative'}`}>
                        <p><strong>Instructor:</strong> {selectedChoice.explanation}</p>
                        <button className="btn primary mt-4 w-full justify-center" onClick={handleTransitionToNext}>
                            Keep Driving <ArrowRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            {/* Driver Dashboard & Steering Wheel Foreground */}
            <div className="car-dashboard">
                <div className="gauge-cluster">
                    <div className="gauge speedometer">
                        <Gauge size={48} className={`speed-icon ${isDriving ? 'spinning' : ''}`} />
                        <span className="speed-text">{isDriving ? '45' : '0'} mph</span>
                    </div>
                    <div className="score-display">
                        <span>Score: {score}</span>
                    </div>
                </div>
                <div className={`steering-wheel ${isDriving ? 'wheel-wobble' : ''}`}>
                    <div className="wheel-inner"></div>
                </div>
            </div>
        </div>
    );
};

export default DrivingGame;

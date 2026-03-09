import React from 'react';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header glass-panel">
            <div className="header-content">
                <Link to="/" className="logo-link">
                    <div className="logo-icon-wrapper">
                        <Car size={24} className="logo-icon" />
                    </div>
                    <h1 className="logo-text">Texas <span className="gradient-text">DMV Prep</span></h1>
                </Link>
                <nav className="header-nav">
                    <Link to="/quiz" className="nav-link">Practice Test</Link>
                    <Link to="/flashcards" className="nav-link">Flashcards</Link>
                    <Link to="/study" className="nav-link">Question Bank</Link>
                    <Link to="/review" className="nav-link">Weak Areas</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

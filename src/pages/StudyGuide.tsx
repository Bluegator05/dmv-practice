import React from 'react';
import { questions } from '../data/questions';
import { BookOpen, ShieldAlert, BadgeCheck } from 'lucide-react';

const StudyGuide: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                        <BookOpen className="text-primary" size={32} />
                        Texas DMV Question Bank
                    </h1>
                    <p className="text-lg opacity-80">
                        Study the full repository of questions before taking the practice exam.
                        The real test will pull 30 random questions from this bank.
                    </p>
                </div>
                <div className="bg-primary/20 text-primary-light px-4 py-2 rounded-full font-bold">
                    {questions.length} Total Questions
                </div>
            </div>

            <div className="space-y-6">
                {questions.map((q, index) => {
                    const answerText = q.options[q.correctAnswer];

                    return (
                        <div key={q.id} className="glass-panel p-6 rounded-xl border-l-4 border-l-primary relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-primary/20 text-primary-light px-3 py-1 text-sm font-bold rounded-bl-lg">
                                #{index + 1} • {q.category}
                            </div>

                            <h3 className="text-xl font-bold mb-4 pr-24">{q.question}</h3>

                            <div className="bg-success/10 border border-success/30 rounded-lg p-4 mb-4 flex items-start gap-3">
                                <BadgeCheck className="text-success shrink-0 mt-1" size={24} />
                                <div>
                                    <div className="text-sm text-success font-bold uppercase tracking-wider mb-1">Correct Answer</div>
                                    <div className="text-lg text-white font-medium">{answerText}</div>
                                </div>
                            </div>

                            <div className="bg-dark/50 p-4 rounded-lg flex items-start gap-3">
                                <ShieldAlert className="text-warning shrink-0 mt-1" size={20} />
                                <div>
                                    <div className="text-sm text-warning font-bold uppercase tracking-wider mb-1">Instructor Explanation</div>
                                    <div className="text-base text-gray-300">{q.explanation}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudyGuide;

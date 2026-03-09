import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Category } from '../data/questions';

interface ProgressState {
    hasPassedQuiz: boolean;
    bestScore: number;
    quizzesTaken: number;
    missedQuestions: string[]; // List of question IDs
    weakCategories: Record<Category, number>; // Category name -> count of misses
    recordScore: (score: number, passed: boolean) => void;
    recordMissedQuestion: (questionId: string, category: Category) => void;
    clearProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set) => ({
            hasPassedQuiz: false,
            bestScore: 0,
            quizzesTaken: 0,
            missedQuestions: [],
            weakCategories: {
                'Signs, Signals & Markings': 0,
                'Rules of the Road': 0,
                'Safe Driving Practices': 0,
                'Speed Limits & Distances': 0,
                'Alcohol & Drugs': 0
            },
            recordScore: (score, passed) => set((state) => ({
                bestScore: Math.max(state.bestScore, score),
                hasPassedQuiz: state.hasPassedQuiz || passed,
                quizzesTaken: state.quizzesTaken + 1,
            })),
            recordMissedQuestion: (questionId, category) => set((state) => {
                const newMissed = state.missedQuestions.includes(questionId)
                    ? state.missedQuestions
                    : [...state.missedQuestions, questionId];

                return {
                    missedQuestions: newMissed,
                    weakCategories: {
                        ...state.weakCategories,
                        [category]: state.weakCategories[category] + 1
                    }
                };
            }),
            clearProgress: () => set({
                hasPassedQuiz: false,
                bestScore: 0,
                quizzesTaken: 0,
                missedQuestions: [],
                weakCategories: {
                    'Signs, Signals & Markings': 0,
                    'Rules of the Road': 0,
                    'Safe Driving Practices': 0,
                    'Speed Limits & Distances': 0,
                    'Alcohol & Drugs': 0
                }
            }),
        }),
        {
            name: 'dmv-progress-storage',
        }
    )
);

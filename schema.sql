-- Run this in the Supabase SQL Editor

-- Create a table to store test scores and simulation results
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('practice_test', 'simulator')),
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    passed BOOLEAN NOT NULL,
    weak_categories TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own progress
CREATE POLICY "Users can insert their own progress" 
ON public.user_progress FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Allow users to read their own progress
CREATE POLICY "Users can view their own progress" 
ON public.user_progress FOR SELECT 
USING (auth.uid() = user_id);

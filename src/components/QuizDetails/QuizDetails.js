import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails)
    return (
        <div>

        </div>
    );
};

export default QuizDetails;
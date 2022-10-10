import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    const { name, questions } = quizDetails;

    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-16'>{name}</h1>

            {/* showed all the question */}
            <div className='m-10 mx-40'>
                {
                    questions.map(question => <Question
                        key={question.id}
                        questionDetails={question}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;
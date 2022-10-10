import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    const { name, questions } = quizDetails;

    return (
        <div>
            <h1 className='md:text-5xl text-4xl font-bold text-center my-16'>Quiz Topics : {name}</h1>
            {/* showed all the question */}
            <div className='lg:mx-40 md:mx-10 mx-3'>
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
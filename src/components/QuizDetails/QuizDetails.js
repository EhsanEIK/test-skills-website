import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    const { name, questions } = quizDetails;

    const [correctAnsCart, setCorrectAnsCart] = useState([]);
    const handleClick = id => {
        const exist = correctAnsCart.find(option => option === id);
        if (!exist) {
            const newCorrectAnsCart = [...correctAnsCart, id]
            setCorrectAnsCart(newCorrectAnsCart);
        }
    }

    return (
        <div>
            <h1 className='md:text-5xl text-4xl font-bold text-center mt-16 mb-5'>Quiz Topics : {name}</h1>
            <p className='text-xl font-bold text-center mb-11'>
                <span>Total Marks: {questions.length}</span><br />
                <span className='text-green-700'>Correct Ans: {correctAnsCart.length}</span><br />
                <span className='text-red-700'>Wrong Ans: {questions.length - correctAnsCart.length}</span>
            </p>
            {/* showed all the question */}
            <div className='lg:mx-40 md:mx-10 mx-3'>
                {
                    questions.map(question => <Question
                        key={question.id}
                        questionDetails={question}
                        handleClick={handleClick}></Question>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;
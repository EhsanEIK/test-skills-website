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
        <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1'>
            <div className='lg:col-span-5 md:col-span-3 md:mb-20 mb-72'>
                <h1 className='md:text-5xl text-4xl font-bold text-center my-16'>Quiz Topics : {name}</h1>
                {/* showed all the question */}
                <div className='md:mx-10 mx-3'>
                    {
                        questions.map(question => <Question
                            key={question.id}
                            questionDetails={question}
                            handleClick={handleClick}></Question>)
                    }
                </div>
            </div>
            {/* correct ans show card */}
            <div className='md:static w-full fixed bottom-0 md:mt-44 mt-10'>
                <p className='bg-slate-300 text-xl font-bold text-center sticky top-0 mb-11 py-20'>
                    <span>Total Marks: {questions.length}</span><br />
                    <span className='text-green-700'>Correct Ans: {correctAnsCart.length}</span><br />
                    <span className='text-red-700'>Wrong Ans: {questions.length - correctAnsCart.length}</span>
                </p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;
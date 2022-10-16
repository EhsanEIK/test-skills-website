import React, { createContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

export const QuestionContext = createContext([]);

const QuizDetails = () => {
    const quizDetails = useLoaderData().data;
    const { name, questions } = quizDetails;

    // to count total correct answer
    const [correctAnsCart, setCorrectAnsCart] = useState([]);
    const handleClickCorrectAns = id => {
        const exist = correctAnsCart.find(option => option === id);
        if (!exist) {
            const newCorrectAnsCart = [...correctAnsCart, id];
            setCorrectAnsCart(newCorrectAnsCart);
        }
        const rest = wrongAnsCart.filter(option => option !== id);
        setWrongAnsCart(rest);
        toast.success("Corrent Answer!");
    }

    // to count total wrong answer
    const [wrongAnsCart, setWrongAnsCart] = useState([]);
    const handleClickWrongAns = id => {
        const exist = wrongAnsCart.find(option => option === id);
        if (!exist) {
            const newWrongAnsCart = [...wrongAnsCart, id];
            setWrongAnsCart(newWrongAnsCart);
        }
        const rest = correctAnsCart.filter(option => option !== id);
        setCorrectAnsCart(rest);
        toast.error("Wrong Answer!");
    }

    return (
        <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1'>
            <QuestionContext.Provider value={[handleClickCorrectAns, handleClickWrongAns]}>
                <div className='lg:col-span-5 md:col-span-3 md:mb-20 mb-72'>
                    <h1 className='md:text-5xl text-4xl font-bold text-center my-16'>Quiz Topics : {name}</h1>
                    {/* showed all the question */}
                    <div className='md:mx-10 mx-3'>
                        {
                            questions.map(question => <Question
                                key={question.id}
                                questionDetails={question}></Question>)
                        }
                    </div>
                </div>
            </QuestionContext.Provider>
            {/* correct ans show card */}
            <div className='w-full md:static fixed bottom-0 md:mt-44 mt-10'>
                <p className='bg-slate-300 text-xl font-bold text-center sticky top-24 mb-11 py-20'>
                    <span>Total Marks: {questions.length}</span><br />
                    <span className='text-green-700'>Correct Ans: {correctAnsCart.length}</span><br />
                    <span className='text-red-700'>Wrong Ans: {wrongAnsCart.length}</span>
                </p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questionDetails }) => {
    const { id, question, options, correctAnswer } = questionDetails;

    const checkAnswer = (optionsId) => {
        console.log(optionsId)
        document.getElementById(optionsId).value === correctAnswer ? toast.success("Corrent Answer!") : toast.error("Wrong Answer!");
    }

    return (
        <div className='border-2 p-5 mb-10'>
            <h2 className='text-lg font-bold mb-5'>{question.slice(3, question.length - 4)}</h2>

            {/* showed all the options of each questions */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    options.map((option, idx) => {
                        const optionId = idx + option.slice(0, 10);
                        return (
                            <div onClick={() => checkAnswer(optionId)} key={optionId} className="flex items-center mb-4" >
                                <input id={optionId} type="radio" name={id} value={option} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" >{option}</label>
                            </div>
                        )
                    })
                }
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Question;
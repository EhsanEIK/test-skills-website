import React from 'react';

const Question = ({ questionDetails }) => {
    const { question, options } = questionDetails;
    // console.log(options)

    return (
        <div className='border-2 p-5 mb-10'>
            <h2 className='text-lg font-bold mb-5'>{question.slice(3, question.length - 4)}</h2>

            {/* showed all the options of each questions */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    options.map((option, id) => {
                        const keyId = id + option.slice(0, 10);
                        return (
                            <div key={keyId} className="flex items-center mb-4" >
                                <input id={`${keyId}`} type="radio" name={question} value={option} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                <label htmlFor={`${keyId}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" > {option}</label>
                            </div>
                        )
                    })
                }
            </div >
        </div >
    );
};

export default Question;
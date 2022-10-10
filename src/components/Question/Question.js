import React from 'react';

const Question = ({ questionDetails }) => {
    const { question, options } = questionDetails;
    console.log(options)

    return (
        <div className='border-2 p-5 mb-10'>
            <h2 className='mb-5'>{question.slice(3, question.length - 4)}</h2>

            {/* showed all the options of each questions */}
            <div className='grid grid-cols-2 gap-5'>
                {
                    options.map(option => {
                        return (
                            <>
                                <p>{option}</p>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Question;
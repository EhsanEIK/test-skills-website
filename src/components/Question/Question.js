import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { QuestionContext } from '../QuizDetails/QuizDetails';

const Question = ({ questionDetails }) => {
    const [handleClickCorrectAns, handleClickWrongAns] = useContext(QuestionContext);
    const { id, question, options, correctAnswer } = questionDetails;

    // to check correct/wrong answer and then show a toast message 
    const checkAnswer = (optionsId) => {
        const answer = document.getElementById(optionsId).value;
        if (answer === correctAnswer) {
            toast.success("Corrent Answer!");
            handleClickCorrectAns(id);
        }
        else {
            toast.error("Wrong Answer!");
            handleClickWrongAns(id);
        }
    }

    const showCorrectAnswerByEyeIcon = () => {
        toast.info(`Correct Answer is: ${correctAnswer}`, {
            theme: "colored"
        });
    }

    return (
        <div className='border-2 p-5 mb-10'>
            <div className='flex justify-between'>
                <h2 className='text-lg font-bold mb-5'>{question.slice(3, question.length - 4)}</h2>
                <button onClick={showCorrectAnswerByEyeIcon}>
                    <EyeIcon className="h-6 w-6 text-blue-500" />
                </button>
            </div>

            {/* showed all the options of each questions */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    options.map((option, idx) => {
                        const optionId = idx + option.slice(0, 10);
                        return (
                            <div onChange={() => checkAnswer(optionId)} key={optionId} className="flex items-center mb-4" >
                                <input id={optionId} type="radio" name={id} value={option} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                <label htmlFor={optionId} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Question;
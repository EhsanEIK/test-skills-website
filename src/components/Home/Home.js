import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData().data;

    return (
        <>
            <header className='header flex'>
                <div className='container mx-auto text-white md:text-start text-center md:w-2/4 mt-14 md:ml-10 mx-3'>
                    <h1 className='md:text-5xl text-3xl mb-5'>Welcome To
                        <span className='text-amber-600 font-bold mx-3'>TEST SKILLS</span>
                        <br />Web App!!!
                    </h1>
                    <p>This is an Quiz Test website. Here you can test your skills on your technology knowledge. This is an very popular website in the world now! So, why are you waiting?!! Enjoy the quiz and check you ability.</p>
                </div>
            </header>

            {/* showed all the topics */}
            <section className='container mx-auto my-32'>
                <h1 className='text-4xl text-center font-semibold mb-20'>Test Your Skill on Following Topics</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-0 mx-3'>
                    {
                        topics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}></Topic>)
                    }
                </div>
            </section>
        </>
    );
};

export default Home;
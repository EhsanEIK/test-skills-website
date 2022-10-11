import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData().data;

    return (
        <div className='container md:mx-auto px-2'>
            <h1 className='text-4xl text-center font-bold mb-20 mt-10'>This is the Chart of Total Quiz on every topics</h1>

            <div className='flex justify-center'>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={topics}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#C04000" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
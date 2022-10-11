import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center font-bold mb-3 mt-10'>This is blogs page</h1>

            {/* blog-01 */}
            <div className='border-2 rounded-lg my-10 px-10 py-6'>
                <h1 className='text-2xl font-bold mb-3'>What is the purpose of react-router?</h1>
                <p>
                    Routing is a process in which a user is directed to different pages based on their action or request. React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route without reloading the website.

                    React Router is a standard library for routing in React. It is used to create routing in the React application using React Router Package.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
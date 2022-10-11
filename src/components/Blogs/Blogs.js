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
            {/* blog-02 */}
            <div className='border-2 rounded-lg my-10 px-10 py-6'>
                <h1 className='text-2xl font-bold mb-3'>How does Context API work?</h1>
                <p>
                    Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that you want to have access to.
                </p>
            </div>
            {/* blog-03 */}
            <div className='border-2 rounded-lg my-10 px-10 py-6'>
                <h1 className='text-2xl font-bold mb-3'>Explain about useRef().</h1>
                <p>
                    The useRef hook is the new addition in React 16.8. The useRef Hook allows us to persist values between renders. The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object. It can be used to access a DOM element directly.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
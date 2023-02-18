import React from 'react';

const Blog = () => {
    return (
        <div>
            <article>
                <p>1. Question and Answer:</p>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a react application ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Local (UI) state – Local state is data we manage in one or another component.
                            Local state is most often managed in React using the useState hook.
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                            <br />  Global (UI) state – Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                            Sometimes state we think should be local might become global.
                            <br />  Server state – Data that comes from an external server that must be integrated with our UI state.
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                            <br /> URL state – Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                        </p>
                    </div>
                </div>
            </article>
            <article>
                <p>2. Question and Answer:</p>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.)
                            JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance.
                            In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.
                            All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).
                        </p>
                    </div>
                </div>
            </article>
            <article>
                <p>3. Question and Answer:</p>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test ? Why should be unit tests ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.
                            Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation.
                            Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services.
                            This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services.
                        </p>
                        <br />
                        <p>
                            Unit tests help to find and fix bugs quickly and easily. Unit tests contribute to higher code quality.
                            Unit tests contribute to better application architecture.
                            Unit tests act as documentation. The main advantage of unit tests is their laser-sharp focus.
                            Since they test a single function, they give precise feedback.
                        </p>
                    </div>
                </div>
            </article>
            <article>
                <p>4. Question and Answer:</p>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        React vs Angular vs Vue ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <span className='text-primary text-lg'>React :</span> <br />
                            React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components.
                            It is a front-end JavaScript framework, created by Facebook in 2011. The initial version (V0.3.0) was released in July 2013. The latest version is V5.0.1. It has a size of 31.8K.
                            This complete guide on How To Learn ReactJS: A Complete Guide For Beginners will help in making your transition towards React if you’re a beginner.
                            Popularity – React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development.
                            There are more developers who keep React as a priority for creating wonderful websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and The New York Times use React for their front-end development.
                            Architecture – It does not follow any specific pattern, developers have the freedom to choose any design pattern.
                            It begins with a single root component. Each can be nested with another component. It can also include third-party components such as state management routing, animation, etc for specific purposes.
                            Here, the components are the large building block that defines reusable items used through the application.
                        </p>
                        <p>
                            <span className='text-primary text-lg'>Angular :</span><br />
                            Angular, developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM.
                            Angular provides a set of tools using which a complex, reactive UI can be built.
                            It is primarily aimed at creating SPAs (Single Page Applications) and performs various operations such as routing, state management, PWA, testing, and building, having a size of 143K.
                            Popularity – Angular is used by Google, Upwork, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications.
                            Architecture – Angular follows MVC (Model-View-Controller) architecture, also you don’t have restrictions in following only MVC architecture. Since Angular is also component-based, you can choose any design pattern.
                            The Angular framework contains modules, templates, services, and components in the architecture which follows several operations while implementing an application.
                        </p>
                        <p>
                            <span className='text-primary text-lg'>Vue :</span><br />

                            Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool.
                            It is used for developing single-page engaging and high-quality web applications.
                            It lets you extend directives (HTML with HTML attributes), and also provides built-in directives and user-defined directives. It is the lightest framework having a size of 23K.
                            Popularity – Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo.
                            It has a good rating on GitHub making it so popular.
                            Architecture – Vue is called a progressive framework where you can extend functionality using third-party packages.
                            It follows the MVVM (Model View ViewModel) pattern but is also not strictly linked to it.
                            It also has SFCs (Single File Components) which can be transpiled into JS code using tools like Webpack.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Blog;
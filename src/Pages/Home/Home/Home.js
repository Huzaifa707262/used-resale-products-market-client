import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Category from '../Categoty/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertised></Advertised>
            <section>
                <h2 className='text-2xl text-purple-600'>About Resale Market Place</h2>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://th.bing.com/th/id/OIP.BcHsXK7B0QGwJnX0rbj__gHaEo?w=292&h=182&c=7&r=0&o=5&pid=1.7" alt="Movie" /></figure>
                    <figure><img src="https://th.bing.com/th/id/OIP.Yvqyt9eA6BBUst4UfLe3WwHaF7?w=213&h=180&c=7&r=0&o=5&pid=1.7" /></figure>
                    <figure><img src="https://th.bing.com/th/id/OIP.zUb-ug4TsjXYqC_4qJ6sFwHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Motorcycle resale market!</h2>
                        <p>
                            Revenue in the Motorcycles market is projected to reach US$128.9.volume of US$168.60bn by 2027.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
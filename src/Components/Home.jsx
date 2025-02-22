import React from 'react'

const Home = () => {
    return (
        <div id='home' className='bg-home w-[300%] md:bg-home  bg-cover bg-center bg-no-repeat md:max-w-[1343px] h-[595px]'>
            <div className='md:text-white text-white backdrop-filter pt-44 md:pt-[175px]'>
                <div className='mx-[70px] rounded-xl pl-2 backdrop-filter backdrop-blur'>
                    <h1 className='text-center font-serif text-[50px] md:text-[100px] '>Welcome to SJ Foods</h1>
                    <p className='font-serif text-[30px] md:text-zinc-200'>At SJ Foods, we bring you the joy of cooking with simple, delicious, and easy-to-follow recipes.
                        Whether you're a seasoned chef or a beginner in the kitchen, our recipes are crafted to help you create
                        mouthwatering dishes with ease. From traditional flavors to modern twists,SJ Foods is your ultimate destination
                        for culinary inspiration.Let's turn every meal into a delightful experience!</p>
                </div>
            </div>
        </div>
    )
}

export default Home

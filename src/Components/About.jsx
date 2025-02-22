import React from 'react'

const About = () => {
    return (
        <div id='about' className='md:bg-about bg-about w-[300%] bg-cover h-full bg-center bg-no-repeat  md:max-w-[1343px] md:h-[605px] '>
            <div className='text-white backdrop-filter pt-[100px] flex '>
                <div className='ml-[120px] mr-[180px] rounded-xl backdrop-filter md:backdrop-blur'>
                    <div className='backdrop-blur-2xl '>
                        <h1 className='text-center font-serif text-[80px]'>About</h1>
                        <p className='font-serif   px-[10px] pl-[10px] mx-[5px] mb-12  '>Welcome to SJ Foods, your go-to destination for delicious and easy-to-make recipes!
                            Our mission is to bring you a variety of recipes that cater to different tastes, cooking styles, and dietary needs. Whether you're a beginner in the kitchen or a seasoned home chef,
                            our carefully curated recipes will help you create mouthwatering dishes with ease.At SJ Foods, we believe that cooking should be enjoyable and accessible to everyone.
                            That's why we focus on providing step-by-step instructions, helpful cooking tips, and ingredient alternatives to make your culinary experience seamless.
                            Join us on this flavorful journey as we explore traditional and modern recipes, fusion dishes, and creative cooking ideas that will inspire you to try something new every day.
                            Happy Cooking! The SJ Foods Team
                        </p>
                    </div>
                </div>
                <div className='grid gap-1 ml-5'>
                    <img
                        src='res1.jpg'
                        alt='Restaurent'
                        className='md:visibled md:ml-[-160px] md:mt-[40px]  ml-[-160px] rounded-3xl'
                    />
                    <img
                        src='res2.jpg'
                        alt='Restaurent'
                        className='md:hidden md:ml-[-160px] md:mt-[40px]  ml-[-160px] rounded-3xl'
                    />
                    <img
                        src='res3.jpg'
                        alt='Restaurent'
                        className='md:hidden md:ml-[-160px] md:mt-[40px]  ml-[-160px] rounded-3xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default About

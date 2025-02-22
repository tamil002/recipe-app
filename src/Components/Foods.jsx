import React from 'react'

const Foods = () => {
    return (
        <div id='food' className='bg-veg w-[300%] md:bg-veg bg-cover grid font-serif md:max-w-full h-full'>
            <div className='pt-4 '>
                <div className='font-bold text-white font-serif text-4xl md:text-[50px] text-center mx-[340px] rounded backdrop-filter backdrop-blur-sm'>
                    <h1>Tasty & Spicy Foods</h1>
                </div>
                <div className='grid md:flex gap-[80px] mx-[140px] mt-[30px]'>
                    <div>
                        <div className="card md:w-[300px] shadow-xl bg-white">
                            <figure>
                                <img
                                    src="veg1.jpg"
                                    alt="Idly Sambar" />
                            </figure>
                            <div className="card-body bg-white border rounded-lg">
                                <h2 className="card-title text-5xl md:text-3xl">Idly Sambar</h2>
                                <p className='text-2xl md:text-sm md:mt-[-5px]'>If you want need more details Please click below the button!</p>

                                <button className="btn text-4xl md:text-xl md:mt-3 hover:bg-white bg-white text-black" onClick={() => document.getElementById('my_modal_1').showModal()}>Learn More</button>
                                <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold md:text-[55px] text-6xl md:text-3xl md:mb-[-20px] text-center font-serif  ">Ingredients!</h3>
                                        <div className='flex pt-2 text-3xl md:text-lg  text-center gap-24 mt-3  px-40 md:px-16 md:gap-2  '>
                                            <p className="py-2 font-serif text-left  md:size-[150px] gap-1 md:mt-3">
                                                <li className='py-1'>Dal</li>
                                                <li className='py-1'>Vegetables</li>
                                                <li className='py-1'>Tamarind</li>
                                                <li className='py-1'>Onions</li>
                                                <li className='py-1'>Tomatoes</li>
                                                <li className='py-1'>Spices</li>
                                            </p>
                                            <p className='py-2 font-serif text-left  md:size-[150px] md:mt-3'>
                                                <li className='py-1'>Turmeric powder</li>
                                                <li className='py-1'>Red chili powder</li>
                                                <li className='py-1'>Cumin seeds</li>
                                                <li className='py-1'>Mustard seeds</li>
                                                <li className='py-1'>Tomatoes</li>
                                                <li className='py-1'>oil or ghee</li>
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn mt-[-15px] md:mt-12 text-4xl md:text-lg hover:bg-white bg-white text-black">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  md:w-[300px] shadow-xl bg-white ">
                            <figure>
                                <img
                                    src="veg2.jpg"
                                    alt="Paneer Tikka" />
                            </figure>
                            <div className="card-body bg-white border rounded-lg">
                                <h2 className="card-title text-5xl md:text-3xl">Paneer Tikka!</h2>
                                <p className='text-2xl md:text-sm md:mt-[-5px]'>If you want need more details Please click below the button!</p>

                                <button className="btn text-4xl md:text-xl md:mt-3 hover:bg-white bg-white text-black" onClick={() => document.getElementById('my_modal_2').showModal()}>Learn More</button>
                                <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold md:text-[55px] text-6xl md:text-3xl md:mb-[-20px] text-center font-serif ">Ingredients!</h3>
                                        <div className='flex pt-2 text-3xl md:text-lg  text-center gap-24 mt-3  px-28 md:px-11 md:gap-6  '>
                                            <p className="py-2 font-serif text-left  md:size-[150px] gap-1 md:mt-3">
                                                <li className='py-1'>Paneer</li>
                                                <li className='py-1'>Plain Yogurt</li>
                                                <li className='py-1'>Ginger-Garlic Paste</li>
                                                <li className='py-1'>Red Chili Powder</li>
                                                <li className='py-1'>Garam Masala</li>
                                                <li className='py-1'>Coriander Powder</li>
                                            </p>
                                            <p className='py-2 font-serif text-left md:size-[80px] md:mt-3'>
                                                <li className='py-1'>cumin powder</li>
                                                <li className='py-1'>mustard oil</li>
                                                <li className='py-1'>kasoori methi</li>
                                                <li className='py-1'>salt</li>
                                                <li className='py-1'>lemon juice</li>
                                                <li className='py-1'>Tomatoes</li>
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn mt-[-15px] md:mt-12 text-4xl md:text-lg hover:bg-white bg-white text-black">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  md:w-[300px] shadow-xl bg-white">
                            <figure>
                                <img
                                    src="veg3.jpg"
                                    alt="Pav Bhaji" />
                            </figure>
                            <div className="card-body bg-white border rounded-lg">
                                <h2 className="card-title text-5xl md:text-3xl">Pav Bhaji!</h2>
                                <p className='text-2xl md:text-sm md:mt-[-5px]'>If you want need more details Please click below the button!</p>
                                <button className="btn text-4xl md:text-xl md:mt-3 hover:bg-white bg-white text-black" onClick={() => document.getElementById('my_modal_3').showModal()}>Learn More</button>
                                <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold md:text-[55px] text-6xl md:text-3xl md:mb-[-20px] text-center font-serif ">Ingredients!</h3>
                                        <div className='flex pt-2 text-3xl md:text-lg text-center gap-24 mt-3  px-20 md:px-3 md:gap-6'>
                                            <p className="py-2 font-serif text-left md:pl-9 md:mt-3  md:size-[150px] gap-1">
                                                <li className='py-1'>Chopped Onions</li>
                                                <li className='py-1'>Chopped Garlic</li>
                                                <li className='py-1'>Green Chilies</li>
                                                <li className='py-1'>Chopped Tomatoes</li>
                                                <li className='py-1'>Cauliflower</li>
                                                <li className='py-1'>Chopped Cabbage</li>
                                            </p>
                                            <p className='py-2 font-serif text-left md:mt-3 md:size-[90px]'>
                                                <li className='py-1'>Turmeric Powder</li>
                                                <li className='py-1'>Red Chili Powder</li>
                                                <li className='py-1'>Pav Bhaji Masala</li>
                                                <li className='py-1'>Cumin Seeds</li>
                                                <li className='py-1'>Coriander Powder</li>
                                                <li className='py-1'>kasuri Methi</li>
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn mt-[-15px] md:mt-14 text-4xl md:text-lg hover:bg-white bg-white text-black">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <div className='grid md:flex gap-[80px] mx-[140px] mt-5 md:mt-[10px] mb-[20px]'>
                    <div>
                        <div className="card md:w-[300px] shadow-xl bg-white">
                            <figure>
                                <img
                                    src="nonveg1.jpg"
                                    alt="Chicken Biriyani" />
                            </figure>
                            <div className="card-body bg-white border rounded-lg">
                                <h2 className="card-title text-5xl md:ml-11 md:text-3xl md:mt-[-15px]">Chicken Biriyani!</h2>
                                <p className='text-2xl md:text-sm md:mt-[-5px]'>If you want need more details Please click below the button!</p>
                                <button className="btn text-4xl md:text-lg md:mt-1 md:mb-[-11px] hover:bg-white bg-white text-black" onClick={() => document.getElementById('my_modal_4').showModal()}>Learn More</button>
                                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold md:text-[55px] text-6xl md:text-3xl md:mb-[-20px] text-center font-serif">Ingredients!</h3>
                                        <div className='flex pt-2 text-3xl md:text-lg  text-center gap-24 mt-3  px-40 md:px-16 md:gap-6 '>
                                            <p className="py-2 font-serif text-left  md:size-[150px] gap-1 md:mt-3">
                                                <li className='py-1'>Chicken</li>
                                                <li className='py-1'>Rice</li>
                                                <li className='py-1'>Spices</li>
                                                <li className='py-1'>Herbs</li>
                                                <li className='py-1'>Onions</li>
                                                <li className='py-1'>Tomatoes</li>
                                            </p>
                                            <p className='py-2 font-serif text-left md:size-[170px] md:mt-3'>
                                                <li className='py-1'>Turmeric Powder</li>
                                                <li className='py-1'>Red Chili Powder</li>
                                                <li className='py-1'>Saffron</li>
                                                <li className='py-1'>Fried onions</li>
                                                <li className='py-1'>Yogurt</li>
                                                <li className='py-1'>Salt</li>
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn mt-[-15px] md:mt-5 text-4xl md:text-lg hover:bg-white bg-white text-black">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  md:w-[300px] shadow-xl bg-white ">
                            <figure>
                                <img
                                    src="nonveg2.jpg"
                                    alt="Mutton Curry" />
                            </figure>
                            <div className="card-body bg-white border rounded-lg">
                                <h2 className="card-title text-5xl md:text-3xl">Mutton Curry!</h2>
                                <p className='text-2xl md:text-sm md:mt-[-5px]'>If you want need more details Please click below the button!</p>
                                <button className="btn text-4xl md:text-xl md:mt-3 hover:bg-white bg-white text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Learn More</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold md:text-[55px] text-6xl md:text-3xl md:mb-[-20px] text-center font-serif">Ingredients!</h3>
                                        <div className='flex pt-2 text-3xl md:text-lg  text-center gap-18 mt-3  px-44 md:px-16 md:gap-6  '>
                                            <p className="py-2 font-serif text-left  md:size-[150px] gap-1 md:mt-3">
                                                <li className='py-1'>Mutton</li>
                                                <li className='py-1'>Onion</li>
                                                <li className='py-1'>Garlic</li>
                                                <li className='py-1'>Ginger</li>
                                                <li className='py-1'>Cumin Powder</li>
                                                <li className='py-1'>Coriander Powder</li>
                                            </p>
                                            <p className='py-2 font-serif text-left md:size-[120px] md:mt-3'>
                                                <li className='py-1'>Black Pepper</li>
                                                <li className='py-1'>Garam Masala</li>
                                                <li className='py-1'>Turmeric</li>
                                                <li className='py-1'>Yogurt</li>
                                                <li className='py-1'>Methi Leaves</li>
                                                <li className='py-1'>Cinnamon</li>
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn mt-[-15px] md:mt-12 text-4xl md:text-lg hover:bg-white bg-white text-black">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  md:w-[300px] shadow-xl bg-white">
                            <figure>
                                <img
                                    src="nonveg3.jpg"
                                    alt="Fish Fry" />
                            </figure>
                            <div className="card-body bg-white border rounded-lg">
                                <h2 className="card-title text-5xl md:text-3xl">Fish Fry!</h2>
                                <p className='text-2xl md:text-sm md:mt-[-5px]'>If you want need more details Please click below the button!</p>
                                <button className="btn text-4xl md:text-xl md:mt-3 hover:bg-white bg-white text-black" onClick={() => document.getElementById('my_modal_6').showModal()}>Learn More</button>
                                <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold md:text-[55px] text-6xl md:text-3xl md:mb-[-20px] text-center font-serif">Ingredients!</h3>
                                        <div className='flex pt-2 text-3xl md:text-lg  text-center gap-20 mt-3  px-44 md:px-16 md:gap-6 '>
                                            <p className="py-2 font-serif text-left  md:size-[150px] gap-1 md:mt-3">
                                                <li className='py-1'>fish</li>
                                                <li className='py-1'>flour</li>
                                                <li className='py-1'>seasonings</li>
                                                <li className='py-1'>gram flour</li>
                                                <li className='py-1'> rice flour</li>
                                                <li className='py-1'>Turmeric</li>
                                            </p>
                                            <p className='py-2 font-serif text-left md:size-[110px] md:mt-3'>
                                                <li className='py-1'>Salt</li>
                                                <li className='py-1'>Ginger paste</li>
                                                <li className='py-1'>Garlic paste</li>
                                                <li className='py-1'>Yogurt</li>
                                                <li className='py-1'>Mustard oil</li>
                                                <li className='py-1'>Cold water</li>
                                            </p>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn mt-[-15px] md:mt-12 text-4xl md:text-lg hover:bg-white bg-white text-black">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foods

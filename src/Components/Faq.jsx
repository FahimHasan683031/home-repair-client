
const Faq = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-600 text-center  mb-3"> FAQ </h1>
            <p className=" text-center text-sm text-slate-500 mb-10 font-medium leading-7  ">Comon frequently asked question &   their <br /> answer given below.  </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-xl items-center mx-auto px-6 mb-32">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl text-teal-600 font-medium">
                        What types of home repair services do you offer?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">We offer a wide range of home repair services, including plumbing repairs, electrical fixes, HVAC maintenance, roofing repairs, structural improvements, and much more. Our skilled technicians can handle both small and large repair projects.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4"  />
                        <div className="collapse-title text-xl text-teal-600 font-medium">
                        How do I request a home repair service?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">To request a home repair service, simply contact us through our website or give us a call. Our friendly customer service team will guide you through the process, discuss your needs, and schedule a convenient appointment with one of our experienced technicians.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4"  />
                        <div className="collapse-title text-xl text-teal-600 font-medium">
                        Are your repair technicians licensed and insured?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">Yes, all of our repair technicians are licensed, insured, and highly trained professionals. We prioritize safety and quality in every project we undertake, giving you peace of mind knowing your home is in capable hands.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4"  />
                        <div className="collapse-title text-xl text-teal-600 font-medium">
                        How long does a typical home repair project take to complete?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">The duration of a home repair project can vary depending on the scope and complexity of the work involved. Minor repairs might be completed in a few hours, while more extensive projects could take several days. Our team will provide you with a time estimate during the initial consultation.</p>
                        </div>
                    </div>

                    
                    
                </div>
                <img src={'https://i.ibb.co/rbYFnJy/undraw-Questions-re-1fy7-1.png" alt="undraw-Questions-re-1fy7-1'} alt="" />
            </div>

        </div>
    );
};

export default Faq;
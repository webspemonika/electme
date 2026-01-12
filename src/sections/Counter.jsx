import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
    const counter = [
        { id: 1, count: 950, title: "Employee Empowered" },
        { id: 2, count: 10, suffix: "M", title: "Worldwide Distributors" },
        { id: 3, count: 2000, title: "Receive Daily Ordered" },
        { id: 4, count: 80, suffix: "%", title: "Get Growth Per Year" },
        { id: 5, count: 2000, suffix: "+", title: "Overall Top Brands" },
    ];

    // scroll observer
    const { ref, inView } = useInView({
        triggerOnce: true, // একবারই animate হবে
        threshold: 0.3,    // 30% দেখা গেলেই শুরু
    });
    return (
        <section className="py-5 lg:py-20 bg-[#f2f2f2] ">
            <div className="container mx-auto ">
                <div
                    ref={ref}
                    className="mobile-padding grid  grid-cols-2 lg:grid-cols-5 gap-7 justify-center"
                >
                    {counter.map((item) => (
                        <div key={item.id} className="text-center">
                            <h2 className="text-[26px] lg:text-[40px] text-black-500 font-medium font-heebo ">
                                {inView && (
                                    <CountUp
                                        start={0}
                                        end={item.count}
                                        duration={4.0}
                                    />
                                )}
                                {item.suffix && item.suffix}
                            </h2>

                            <p className="text-sm lg:text-[19px] text-black-600 font-normal font-heebo leading-[150%] tracking-wide mt-2">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;

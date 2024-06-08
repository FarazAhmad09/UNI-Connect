import React from 'react';

export default function Overview() {
    const features = [
        {
            title: "Apply to master's",
            path: "/applymaster",
            desc: "Unlock the secrets to master's program success with our concise and comprehensive guide. Your academic journey begins now."
        },
        {
            title: "Apply to bachelor's",
            path: "/applybachelor",
            desc: "Start your bachelor's journey with step-by-step instructions for University Admissions application process."
        },
        {
            title: "Dates and deadlines",
            desc: "Stay on track with crucial application dates and deadlines for a successful admissions process. Don't miss out, plan ahead."
        }
    ];

    return (
        <>
            <section style={{ paddingBottom: "3.5rem" }}>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="mt-12">
                        <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                            {features.map((item, idx) => (
                                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <h4 className="text-3xl font-semibold under-text-line">
                                        <a href={item.path}>{item.title}</a>
                                    </h4>
                                    <p>{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto py-4 px-4 md:px-8 bg-overview-img">
                <div className="max-w-xxl bg-gray-300 p-5" style={{ opacity: 0.9, marginTop: 50 }}>
                    <div className="py-4">
                        <h3 className="text-3xl text-gray-800 font-bold md:text-4xl">
                        Are you unsure about where to begin the <span className="text-indigo-600">admissions process?</span>
                        </h3>
                        <p className="text-gray-800 leading-relaxed mt-3" style={{ fontSize: 20 }}>
                        Check out our instructions to find out what, when, and where you need to do it.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

import React from 'react'

export default function Blog() {


    const posts = [
        {
            title: "From application to results",
            desc: "There are several steps and decisions that are made during the processing of your admissions application. Find out more about them - and what you can do after each one.",
            img: "https://images.radio.com/aiu-media/GettyImages1284048666-62395b66-b1ad-4ce3-b49a-6649fcfd292a.jpg?width=800",
            href: "javascript:void(0)"
        },
        {
            title: "Find out what you need to submit",
            desc: "Find out what documents you need to complete your master's application",
            img: "https://www.trios.com/uploads/2016/10/group-of-students-studying-together.jpg",
            href: "javascript:void(0)"
        },
        {
            title: "English language requirements",
            desc: "All courses taught in English have an English requirement. Find out what that is - and the ways you can meet the requirement.",
            img: "https://study.com/cimages/multimages/16/08698862-198e-4047-8a18-263eee7b26ef_group2.jpg",
            href: "javascript:void(0)"
        },
    ]


    return (
        <>

            <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8" style={{marginBottom: 50}}>
                {/* <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Blog
                </h1>
                <p className="mt-3 text-gray-500">
                    Blogs that are loved by the community. Updated every hour.
                </p>
            </div> */}
                <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {
                        posts.map((items, key) => (
                            <article className="max-w-sm mx-auto mt-4  rounded-md duration-300 " key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="h-48 rounded-t-md mb-3" />
                                    <div className="pt-3 mr-5 mb-3" style={{marginRight: "4..7rem"}}>
                                        <h3 className="text-xl text-gray-900 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1">{items.desc}</p>
                                    </div>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

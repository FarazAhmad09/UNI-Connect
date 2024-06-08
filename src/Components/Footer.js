import React from 'react'

export default function Footer() {

    const footerNavs = [
        {
            label: "Contact us",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'University Admissions Support Centre'
                },
                {
                    href: '',
                    name: 'Frequently asked question'
                },
                {
                    href: '',
                    name: 'Swedish universities'
                },
            ],
        },
        {
            label: "About us",
            items: [
                {
                    href: '',
                    name: 'About Universityadmissions.se'
                },
                {
                    href: '',
                    name: 'Digital accessibility'
                },
                {
                    href: '',
                    name: 'Processing of personal data'
                },
            ]
        },
        {
            label: "Other websites",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Antagning.se'
                },
                {
                    href: 'javascript:void()',
                    name: 'Studyinsweden.se'
                },
            ]
        },
    ]




    return (
        <>

            <footer className="pt-10 pb-5" style={{backgroundColor: "#ebebeb"}}>
                <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                    <div className="flex-1 mt-4 mb-4 space-y-6 justify-between sm:flex md:space-y-0">
                        {
                            footerNavs.map((item, idx) => (
                                <ul
                                    className="space-y-4 text-gray-600"
                                    key={idx}
                                >
                                    <h4 className="text-gray-900 font-semibold " style={{fontSize: "1.25rem"}}>
                                        {item.label}
                                    </h4>
                                    {
                                        item.items.map(((el, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={el.href}
                                                    className="duration-150 hover:text-gray-400 footer-under-text-line" style={{fontSize: "1rem",}}>
                                                    {el.name}
                                                </a>
                                            </li>
                                        )))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </footer>

        </>
    )
}

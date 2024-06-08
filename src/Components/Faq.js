import { useRef, useState } from "react";


const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }


    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}




export default function Faq() {


    const faqsList = [
        {
            q: "When will I find out if I've been offered a place if I was on reserve or submitted a late application?",
            a: "If you're on reserve or have submitted a late application, you might be wondering when you'll receive notification about your admission status. Typically, notifications for reserved applicants or late submissions are sent out once the initial round of admissions has been processed. However, the exact timing can vary depending on the university's review process and available spaces. Rest assured, we strive to inform all applicants promptly and transparently about their admission status. You can expect to receive communication regarding your application status within [insert timeframe if applicable]. If you have any further questions or concerns, feel free to reach out to our admissions office for assistance."
        },
        {
            q: "What can I do if I really want to study one of my lower ranked courses or programmes?",
            a: "If you have a strong desire to pursue one of your lower-ranked courses or programs, there are several steps you can take to increase your chances of admission. Firstly, thoroughly research the course or program to understand its requirements and prerequisites. Next, consider reaching out to the admissions office or academic advisors to express your interest and inquire about any additional steps you can take to strengthen your application. This might include showcasing relevant experience, taking additional courses or certifications, or providing supplementary materials such as a portfolio or personal statement highlighting your passion for the subject. Additionally, demonstrating your commitment to the program through relevant extracurricular activities or volunteer work can further enhance your application. Ultimately, showcasing your dedication and enthusiasm for the course or program can significantly improve your chances of being admitted, even if it's lower-ranked."
        },
        {
            q: "I've submitted my electronic application, what more is required?",
            a: "After submitting your electronic application, ensure you've provided all required materials promptly. These might include transcripts, letters of recommendation, test scores, and a personal statement. Timely submission of all necessary documents is crucial for a smooth application process."
        },
        {
            q: "My application status is ’Unqualified’. What does that mean?",
            a: "If your application status is Unqualified, it typically means that your application did not meet the minimum requirements set by the university or program. It could be due to various reasons such as incomplete documentation, missing prerequisites, or not meeting the minimum GPA or standardized test score requirements."
        },
        {
            q: "Do I have to reply to my admissions offer?",
            a: "It's crucial to respond to your admissions offer, whether you're accepting or declining it. This allows the university to manage their enrollment effectively. If you're accepting, follow the provided instructions for confirmation. If declining, do so promptly to allow the spot to be offered to another candidate."
        }
    ]



    return (
        <>
            <div >
                <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 p-5" style={{ backgroundColor: "#ebf4f7" }}>
                    <div className="space-y-3 text-center">
                        <h1 className="text-3xl text-gray-800 font-semibold mb-5 mt-5">
                            FAQ
                        </h1>
                        {/* <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        Answered all frequently asked questions, Still confused? feel free to contact us.
                    </p> */}
                    </div>
                    <div className="mt-14 max-w-2xl mx-auto">
                        {
                            faqsList.map((item, idx) => (
                                <FaqsCard
                                    idx={idx}
                                    faqsList={item}
                                />
                            ))
                        }
                    </div>
                </section>
            </div>

        </>
    )
}

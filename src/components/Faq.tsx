import React from "react";

const faqQuestions = [
  {
    question: "What is FastLearn?",
    answer: (
      <>
        <p>
          FastLearn is an AI-powered platform designed to facilitate efficient
          and personalized learning experiences. It utilizes advanced AI
          algorithms to analyze learning materials and provides users with a
          tailored and gamified approach to learning.
        </p>
        <p>Here's how it works:</p>
        <ul>
          <li>
            Step 1: Choose a Subject - Users input a subject they want to learn
            or improve, whether from scratch or to enhance existing knowledge.
          </li>
          <li>
            Step 2: AI-Powered Learning Enhancement - FastLearn employs advanced
            AI algorithms to analyze the chosen subject and determine the best
            approach to personalized learning.
          </li>
          <li>
            Step 3: Personalized and Gamified Learning - FastLearn provides a
            personalized learning experience, tailored to the user's needs. It
            also introduces a gamified element where users can earn points and
            badges as they progress.
          </li>
          <li>
            Step 4: Monitor Progress and Get Insights - FastLearn offers
            insights and analytics about the user's learning journey, helping
            them understand their progress and areas for improvement.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I benefit from FastLearn?",
    answer:
      "FastLearn empowers you to efficiently and personally enhance your learning experiences. It tailors the learning process to your needs, introduces gamification for engagement, and provides insights to monitor and optimize your progress.",
  },
  {
    question: "What types of subjects can I learn with FastLearn?",
    answer:
      "FastLearn is versatile and accommodates a wide range of subjects. Whether you're starting from scratch or looking to deepen your knowledge, FastLearn can be applied to various learning materials and subjects.",
  },
  {
    question: "How does the personalized learning feature work?",
    answer:
      "FastLearn's AI analyzes your chosen subject to create a personalized learning experience. This includes tailoring content and activities to your needs, ensuring an efficient and effective learning journey.",
  },
  {
    question: "Can I track my learning progress with FastLearn?",
    answer:
      "Yes, FastLearn provides insights and analytics about your learning journey. You can monitor your progress, identify strengths and areas for improvement, and make informed decisions to optimize your learning experience.",
  },
  {
    question: "Is FastLearn suitable for both beginners and advanced learners?",
    answer:
      "Absolutely! FastLearn is designed to cater to learners of all levels. Whether you're starting from scratch or aiming to deepen your existing knowledge, FastLearn adapts to your learning needs.",
  },
  {
    question: "Can I use FastLearn for professional development?",
    answer:
      "Yes, FastLearn is a valuable tool for professional development. You can input materials related to your field or industry, allowing FastLearn to enhance your knowledge and skills for career growth.",
  },
  {
    question:
      "How does the gamification aspect enhance the learning experience?",
    answer:
      "The gamification aspect of FastLearn adds an engaging and motivating element to your learning journey. As you progress, you can earn points and badges, making the learning process more enjoyable and rewarding.",
  },
  {
    question:
      "Are there specific formats for the learning materials I can upload?",
    answer:
      "FastLearn supports various formats for learning materials, including documents, presentations, and more. You can upload content in common formats to ensure a seamless and personalized learning experience.",
  },
  {
    question: "Can I collaborate with others on FastLearn?",
    answer:
      "While FastLearn primarily focuses on personalized learning, we are actively working on collaborative features. Stay tuned for updates as we enhance the platform to accommodate group learning and collaboration.",
  },
  {
    question: "How often should I expect insights about my learning progress?",
    answer:
      "FastLearn provides regular insights and analytics to keep you informed about your learning progress. The frequency of updates depends on your usage, ensuring you have timely information to optimize your learning journey.",
  },
  {
    question: "Is customer support available if I encounter any issues?",
    answer:
      "Yes, we offer customer support to assist you with any issues or questions you may have. Our dedicated support team is here to ensure you have a smooth and enjoyable experience with FastLearn.",
  },
  {
    question:
      "Can I integrate FastLearn with other learning platforms or tools?",
    answer:
      "Currently, FastLearn operates as a standalone platform. However, we are exploring integration possibilities to enhance interoperability with other learning tools. Keep an eye on our updates for any new integration features.",
  },
  {
    question:
      "What measures are in place to ensure the security of my learning materials?",
    answer:
      "We prioritize the security of your learning materials. FastLearn employs robust security measures to protect your data, ensuring confidentiality and peace of mind while you engage in your personalized learning journey.",
  },
  {
    question: "Is there a mobile app for FastLearn?",
    answer:
      "As of now, FastLearn is accessible through web browsers. We are actively developing a mobile app to provide users with the flexibility to learn on the go. Stay tuned for the release of our mobile app.",
  },
];

const renderQuestions = () => (
  <div className="flex flex-col items-start px-4 md:px-12 mx-auto max-w-screen-sm text-start lg:p-12">
    {faqQuestions.map((faqQuestion, index) => (
      <details className="p-4 border-b last:border-b-0">
        <summary key={index} className="font-semibold cursor-pointer">
          {faqQuestion.question}
        </summary>
        <div className="mt-3">
          <p className="text-sm leading-6 text-gray-600">
            {faqQuestion.answer}
          </p>
        </div>
      </details>
    ))}
  </div>
);

const Faq = () => (
  <>
    <div className="px-4 md:px-12 mx-auto max-w-screen-sm text-center lg:px-6">
      <div className="mx-auto mt-12">
        <p className="mb-8 text-gray-500 lg:mb-16 text-2xl md:text-4xl font-bold dark:text-gray-700">
          FAQ{" "}
        </p>
        <p className="text-base lg:text-lg lg:pb-14 text-gray-500">
          <strong>Frequently Asked Questions (FAQ)</strong> list is here answer
          some of the most common knowledge gaps. If you have any other
          questions, please contact us.
        </p>
      </div>
    </div>
    <div className="md:px-12 mx-auto max-w-screen-xl">{renderQuestions()}</div>
  </>
);
export default Faq;

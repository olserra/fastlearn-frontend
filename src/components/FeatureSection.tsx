import Link from "next/link";

type StepProps = {
  title: string;
  description: string;
  isSoon?: boolean;
  isFree?: boolean;
  href?: string;
};

const Step = ({ title, description, isSoon, isFree, href }: StepProps) => (
  <div className="relative w-full p-4 border-gray-300 border rounded-lg mb-4 md:p-4 md:mb-0 lg:h-58 xl:min-h-[220px]">
    {isSoon && (
      <div className="absolute top-3 right-3 border border-gray-700 rounded-lg p-1 text-xs">
        Soon
      </div>
    )}
    {isFree && (
      <div className="absolute top-3 right-3 border border-gray-700 rounded-lg p-1 text-xs">
        Free
      </div>
    )}
    <div className="flex flex-row justify-between">
      <p
        className={`text-base md:text-base lg:text-lg lg:font-bold text-gray-700 pb-4 pl-4 font-bold text-start`}
      >
        {title}
      </p>
    </div>
    <p
      className={`leading-loose text-gray-500 text-start text-sm md:text-base px-4 pb-4`}
    >
      {description}
    </p>
  </div>
);

const FeatureSection = () => (
  <div className="lg:py-8 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
    <div className="mx-auto max-w-screen-sm mt-12">
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-gray-500 text-2xl md:text-4xl font-bold dark:text-gray-700">
        How it works
      </p>
      <p className="pb-12 text-base lg:text-lg lg:pb-14 text-gray-500">
        Understand our product in 4 simple steps
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Step
        title="1 - Choose a subject to learn"
        description="Users should type a subject that they would like to learn, either from scratch or get even better on an existing knowledge."
      />
      <Step
        title="2 - AI-Powered Learning Enhancement"
        description="FastLearn employs advanced AI algorithms to analyze and understand the best approach to it. It will then provide you with a personalized learning experience, tailored to your needs"
      />
      <Step
        title="3 - Learn in a Personalized and Gamified Way"
        description="FastLearn will provide you with a personalized learning experience, tailored to your needs. It will also provide you with a gamified experience, where you can earn points and badges as you progress through your learning journey."
      />
      <Step
        title="4 - Monitor your Progress and Get Insights"
        description="Understand where you are and where you are going is key. FastLearn will provide you with insights and analytics about your learning journey, so you can understand your progress and where you are going."
      />
    </div>
  </div>
);

export default FeatureSection;

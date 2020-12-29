import React, { ReactElement } from 'react';

interface Props {
  title: string;
  content: string;
  icon: ReactElement;
}

const StatisticsCard = (props: Props) => {
  const { title, content, icon } = props;

  return (
    <div className="z-0 bg-white px-8 mt-20 rounded-md text-center md:text-left">
      <div className="inline-block transform -translate-y-1/2 bg-primary-violet rounded-full p-5">
        {icon}
      </div>
      <div className="pb-8 -mt-4">
        <div className="text-neutral-dark-violet font-bold mb-2 text-xl">
          {title}
        </div>
        <div className="leading-relaxed tracking-tighter text-neutral-violet-gray text-sm">
          { content }
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;

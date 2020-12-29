import React from 'react';
import StatisticsCard from './StatisticsCard';
import { ReactComponent as BrandIcon } from '../assets/images/icon-brand-recognition.svg';
import { ReactComponent as RecordsIcon } from '../assets/images/icon-detailed-records.svg';
import { ReactComponent as CustomizableIcon } from '../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <section className="bg-neutral-light-gray">
      <div className="container py-20">
        <h2 className="text-center text-neutral-dark-blue mb-2">
          Advanced Statistics
        </h2>
        <div className="text-center text-neutral-violet-gray mx-auto w-full sm:w-4/7 md:w-3/7 leading-relaxed">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </div>
        
        <div className="relative flex flex-col justify-center items-center">
          <div className="absolute w-2 h-2/3 bg-primary-cyan"></div>
          <StatisticsCard
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            icon={<BrandIcon />}
          />
          <StatisticsCard
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            icon={<RecordsIcon />}
          />
          <StatisticsCard
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            icon={<CustomizableIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;

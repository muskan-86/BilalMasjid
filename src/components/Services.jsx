import React from 'react';

const services = [
  {
    title: 'Funeral',
    description: (
      <>
        A funeral at Bilal Masjid involves Islamic rites, including ghusl,
        Salat al-Janazah, and burial arrangements coordinated with nearby cemeteries like PDX Cemetery.
      </>
    ),
    linkText: 'Funeral',
    link: '/funeral',
  },
  {
    title: 'Sunday School',
    description: (
      <>
        Bilal Sunday School provides Islamic education and exciting activities such as a school-wide OMSI field trip,
        along with improved facilities.
      </>
    ),
    linkText: 'Sunday School',
    link: 'https://www.bilalsundayschool.com/',
  },
  {
    title: 'Social Services',
    description: (
      <>
        Social services at Bilal Masjid provide essential support to individuals and families, including healthcare,
        financial assistance, and community resources, to improve well-being and quality of life.
      </>
    ),
    linkText: 'Social Services',
    link: '/social',
  },
  {
    title: 'Islamic Library',
    description: (
      <>
        We have a wide range of religious books, and resources to enhance the spiritual and educational growth of the community.
      </>
    ),
    linkText: 'Islamic Library',
    link: 'https://pdxil.librarika.com/',
  },
  {
    title: 'Cemetry',
    description: (
      <>
        The Islamic Cemetery of Oregon, located in Corvallis, OR, provides a final resting place
        for deceased individuals, adhering to all legal requirements for burial.
      </>
    ),
    linkText: 'Cemetry',
    link: '/cemetry',
  },
  {
    title: 'Outreach',
    description: (
      <>
        Bilal Masjid fosters interfaith dialogue, community service, and strong relationships with various
        religious groups, local law enforcement, and Muslim organizations, while condemning terrorism.
      </>
    ),
    linkText: 'Outreach',
    link: '/outreach',
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 w-full">
      <section className="px-[24px] xl:px-[135px] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 4xl:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-custom-light border shadow-lg rounded-lg hover:shadow-xl max-w-xs mx-auto"
              >
                <h3 className="text-xl font-bold mb-2">
                  <a href={service.link}>{service.title}</a>
                </h3>
                <p className="text-gray-700 mb-4 font-jenson">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

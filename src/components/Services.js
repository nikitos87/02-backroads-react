import Title from "./Title";

const services = [
  {
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title main="our" sub="services" />
      <div className="section-center services-center">
        {services.map((service, idx) => {
          return (
            <article className="service" key={idx}>
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.descr}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

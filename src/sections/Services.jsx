import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div>
      <section
        className="max-contailer flex justify-center 
      flex-wrap gap-9"
      >
        {services.map((service) => (
          <ServiceCard key={service.label} {...service}></ServiceCard>
        ))}
      </section>
    </div>
  );
};

export default Services;

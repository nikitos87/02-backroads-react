import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import Tour from "./Tour";

const tours = [
  {
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    descr: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    country: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    descr: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    country: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    image: tour3,
    date: "september 15th, 2020",
    title: "Explore Hong Kong",
    descr: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    country: "Hong Kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    image: tour4,
    date: "december 5th, 2019",
    title: "Kenya Highlights",
    descr: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    country: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];

// console.log(tours[0].title);

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tours.map((tour, idx) => {
          return <Tour tour={tour} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

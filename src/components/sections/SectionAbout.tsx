import Card from "../Card";

function SectionAbout() {
  return (
    <section className="mb-[180px] -skew-y-6 bg-section-bg bg-cover bg-top py-[240px]">
      <div className="max-w-[1368px] skew-y-6 mx-auto flex justify-between">
        <Card
          url="../src/assets/images/svg-1.svg"
          imgAlt="icon svg"
          title="Explore the world"
          text="Lorem ipsum dolor sit amet
			consectetur adipisicing elit.
			Aperiam, ipsum sapiente
			aspernatur."
        />
        <Card
          url="../src/assets/images/svg-2.svg"
          imgAlt="icon svg"
          title="Explore the world"
          text="Lorem ipsum dolor sit amet
			consectetur adipisicing elit.
			Aperiam, ipsum sapiente
			aspernatur."
        />
        <Card
          url="../src/assets/images/svg-3.svg"
          imgAlt="icon svg"
          title="Explore the world"
          text="Lorem ipsum dolor sit amet
			consectetur adipisicing elit.
			Aperiam, ipsum sapiente
			aspernatur."
        />
        <Card
          url="../src/assets/images/svg-4.svg"
          imgAlt="icon svg"
          title="Explore the world"
          text="Lorem ipsum dolor sit amet
			consectetur adipisicing elit.
			Aperiam, ipsum sapiente
			aspernatur."
        />
      </div>
    </section>
  );
}

export default SectionAbout;

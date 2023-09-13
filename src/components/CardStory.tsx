interface CardStoryProps {
  title: string;
  text: string;
  imgUrl: string;
  figCaption: string;
  altImage: string;
}

function CardStory({ title, text, imgUrl, altImage, figCaption }: CardStoryProps) {
  return (
    <article className="card-blur">
      <figure className="card-figure">
        <img
          className="w-[18rem] h-[18rem] scale-125 transition-all object-cover"
          src={imgUrl}
          alt={altImage}
        />
        <figcaption className="text-white text-base opacity-0 uppercase text-center absolute top-1/2 left-1/2 -translate-x-1/2 transition-all">
          {figCaption}
        </figcaption>
      </figure>
      <div className="skew-x-12">
        <h3 className="uppercase leading-[170%] font-bold text-base mb-[2.1rem] last:mb-0">
          {title}
        </h3>
        <p className="text-base leading-[170%] mb-[2.1rem] last:mb-0">{text}</p>
      </div>
    </article>
  );
}

export default CardStory;

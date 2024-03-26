

const PropertyTypeCard = ({ imageUrl, title, description, onClick }) => {

  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-lg">
      <div className="md:flex">
        <div className="md:flex-shrink-0 items-center">
          <img className="h-48 w-full object-cover md:w-48 p-4" src={imageUrl} alt="Card" />
        </div>
        <div className="p-2">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-4">
            <button onClick={onClick} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeCard;

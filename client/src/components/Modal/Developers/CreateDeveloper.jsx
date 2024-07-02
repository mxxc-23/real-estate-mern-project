const CreateDeveloper = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className="bg-transparent shadow-md w-96 rounded-xl border-2">
        <div className="bg-blue-900 border border-blue-900 gap-2 rounded-tl-lg rounded-tr-lg">
          <div className="flex justify-between m-5">
            <p className="text-white">Create developer</p>
            <button>
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-bl-lg rounded-br-lg">
          <form className="flex flex-col p-10 gap-8">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Site" />
            <div className="flex justify-between gap-2 flex-row-reverse">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
                Create
              </button>
              <button className="bg-red-700 text-white px-4 py-2 rounded-md">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDeveloper;

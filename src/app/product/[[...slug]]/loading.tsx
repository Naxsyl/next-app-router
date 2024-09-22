export default function Loading() {
  return (
    <div className="grid grid-cols-4 mt-5 place-items-center">
      <div className="w-full max-w-sm bg-white  rounded-lg shadow dark:bg-gray-400 my-5 h-96">
        <a href="#"></a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
          </a>

          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

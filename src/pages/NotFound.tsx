import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white font-bold">
      <div className="container flex items-center justify-center flex-col">
        <div className="relative w-[20%] min-w-[160px] aspect-square">
          <img
            src="/assets/bot.svg"
            alt="notfound 404"
            className="w-full h-full"
          />
          <span className="absolute top-0 right-0 text-[400%] lg:text-[500%] xl:text-[700%] 2xl:text-[800%] leading-none ">
            ?
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl my-4">
          Page not found
        </h1>
        <Link className="text-blue-600 hover:text-green-600" to="/">
          GO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">
        {error.status} {error.statusText}
      </h1>

      {/* <NavLink to="/"
        className="m-3 text-2xl p-2 rounded-xl bg-black text-white"
      >Go back to Home page</NavLink> */}

      <button
        onClick={handelNavigate}
        className="m-3 text-2xl p-2 rounded-xl bg-black text-white cursor-pointer"
      >
        Go back
      </button>
    </div>
  );
};

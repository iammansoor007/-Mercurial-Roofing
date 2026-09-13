import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import completeData from "../src/data/completeData.json";

const NotFound = () => {
  const location = useLocation();
  const { notFound } = completeData;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{notFound.code}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{notFound.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {notFound.returnHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

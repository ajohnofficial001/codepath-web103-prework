import { useRoutes, Link } from "react-router-dom";
import "./App.css";

import AddCreator from "./pages/addCreator";
import EditCreator from "./pages/editCreator";
import ShowCreators from "./pages/showCreators";
import ViewCreator from "./pages/viewCreator";
import { supabase } from "./client";
import "@picocss/pico";
import { useEffect, useState } from "react";

const App = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("creator").select();

      setCreators(data);
    };

    fetchCreators();
  }, []);

  let elements = useRoutes([
    {
      path: "/",
      element: <ShowCreators data={creators} />,
    },
    { path: "/add", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator data={creators} /> },
    { path: "/:id", element: <ViewCreator data={creators} /> },
  ]);

  return (
    <div className="App">
      <header className="lightBox">
        <h1>Creatorverse</h1>
        <nav>
          <ul>
            <li>
              <a href="/" role="button">
                View All Creators
              </a>
            </li>
            <li>
              <Link
                to={"/add"}
                onClick={() =>
                  window.scrollTo({ top: 600, behavior: "smooth" })
                }
                role="button"
              >
                Add Creator
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main> {elements} </main>
    </div>
  );
};

export default App;

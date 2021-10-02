import "./App.css";
import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>
          Whoop, it's{" "}
          {new Date(Date.now()).toLocaleString("en-us", { weekday: "long" })} 🌝
          ☕{" "}
        </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), name: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((data) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  value={data.status}
                  onChange={(e) =>
                    setToDos(
                      toDos.filter((values) => {
                        if (values.status === data.status)
                          values.status = e.target.checked;
                        return values;
                      })
                    )
                  }
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{data.name}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setToDos(toDos.filter((e) => e.id !== data.id))
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}

        {toDos.map((values) => {
          if (values.status === true) {
            return <h1>{values.name}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;

import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      name: "Jake",
      role: "CEO",
      img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg",
    },
    {
      name: "Bob",
      role: "Marketing",
      img: "https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg",
    },
    {
      name: "Steve",
      role: "Product design",
      img: "https://images.pexels.com/photos/3438086/pexels-photo-3438086.jpeg",
    },
    {
      name: "Matthew",
      role: "Finance",
      img: "https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg",
    },
    {
      name: "Philippa",
      role: "Cleaner",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Angela",
      role: "Procrastinator",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
  ]);

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;

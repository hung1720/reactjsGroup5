import { useState, useEffect } from "react";
import { db } from "firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { format } from "@progress/kendo-intl";
function CreateSlot() {
  const [newName, setNewName] = useState("");
  const [newMajor, setNewMajor] = useState("");
  const [newBeginTime, setNewBeginTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "apointments");
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      nameMentor: newName,
      major: newMajor,
      beginTime: newBeginTime,
      endTime: newEndTime,
      status: "true",
    });
    window.location.reload();
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <input
        placeholder="Name mentor ...."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <br />
      <input
        placeholder="Major ..."
        onChange={(event) => {
          setNewMajor(event.target.value);
        }}
      />
      <br />
      <input
        type="datetime-local"
        placeholder="Begin ..."
        onChange={(event) => {
          setNewBeginTime(event.target.value);
        }}
      />
      <br />

      <input
        type="datetime-local"
        placeholder="End ..."
        onChange={(event) => {
          setNewEndTime(event.target.value);
        }}
      />

      <br />

      <button onClick={createUser}>Create Schedule</button>

      <table className="table table-borderless table-stripped">
        <thead className="thead-light">
          <tr>
            <th>Name Mentor</th>
            <th>Major</th>
            <th>Begin Time</th>
            <th>End Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            {
              console.log(user.beginTime);
            }
            return (
              <tr>
                <td>{user.nameMentor}</td>
                <td>{user.major}</td>
                <td>{user.beginTime}</td>
                <td>{user.endTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CreateSlot;

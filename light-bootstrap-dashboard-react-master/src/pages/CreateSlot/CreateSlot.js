import React, { useState } from "react";
import { db } from "firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { margin } from "@mui/system";

export default function CreateSlot() {
  const [Major, setMajor] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const usersCollectionRef = collection(db, "users");
  const createShedule = async () => {
    await addDoc(usersCollectionRef, {
      major: Major,
      startTime: startTime,
      endTime: endTime,
    });
  };

  return (
    <div>
      <input
        placeholder="Major..."
        onChange={(event) => {
          setMajor(event.target.value);
        }}
      />
      <br />
      <span>Start Time</span>
      <input
        type="datetime-local"
        onChange={(event) => {
          setStartTime(event.target.value);
        }}
      />
      <br />
      <span>End Time</span>
      <input
        type="datetime-local"
        onChange={(event) => {
          setEndTime(event.target.value);
        }}
      />
      <br />

      <button onClick={createShedule}>Create Schedule</button>
    </div>
  );
}

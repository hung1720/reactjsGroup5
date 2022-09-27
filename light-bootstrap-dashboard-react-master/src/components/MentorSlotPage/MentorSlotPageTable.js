import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "components/MentorSlotPage/MentorSlotPageTableSlice.js";

function MentorSlotPageTable() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="App">
      {posts.map((item) => (
        <li key={item.id}>{item.timeSlot}</li>
      ))}
    </div>
  );
}

export default MentorSlotPageTable;

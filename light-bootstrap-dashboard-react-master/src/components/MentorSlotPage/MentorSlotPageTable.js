import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "components/MentorSlotPage/MentorSlotPageTableSlice.js";
import "components/MentorSlotPage/MentorSlotPageTable.css"

function MentorSlotPageTable() {
  const { posts, loading } = useSelector((state) => state.post); // Du lieu dang array
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
 
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nameSlot</th>
            <th>major</th>
            <th>timeSlot</th>
            <th>Decription</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
        {posts.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.nameSlot }</td>
          <td>{ item.major }</td>
          <td>{ item.timeSlot }</td>
          <td>{ item.Decription }</td>
          <td>{ item.id }</td>
        </tr>
      );
    })}
        </tbody>
      </table>
    </div>

  );

}

export default MentorSlotPageTable;
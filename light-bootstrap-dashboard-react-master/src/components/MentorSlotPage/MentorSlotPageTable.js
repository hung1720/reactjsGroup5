import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "components/MentorSlotPage/MentorSlotPageTableSlice.js";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
function MentorSlotPageTable() {
  const { posts, loading } = useSelector((state) => state.post); // Du lieu dang array
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
 
  }, []);
  return (
    <div>
      <MDBTable>
      <MDBTableHead>
          <tr className='table-danger'>
            <th scope='col'>id</th>
            <th scope='col'>nameSlot</th>
            <th scope='col'>major</th>
            <th scope='col'>timeSlot</th>
            <th scope='col'>Decription</th>
          </tr>
          </MDBTableHead>
          <MDBTableBody>
        {posts.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.id }</td>
          <td>{ item.nameSlot }</td>
          <td>{ item.major }</td>
          <td>{ item.timeSlot }</td>
          <td>{ item.Decription }</td>
        </tr>
      );
    })}
        </MDBTableBody>
        </MDBTable>
    </div>

  );

}

export default MentorSlotPageTable;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "components/MentorSlotPage/MentorSlotPageTableSlice.js";
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import Table from 'react-bootstrap/Table';
// function MentorSlotPageTable() {
//   const { posts, loading } = useSelector((state) => state.post); // Du lieu dang array
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getPosts());
 
//   }, []);
//   return (
//     <div>
//       <MDBTable>
//       <MDBTableHead>
//           <tr className='table-danger'>
//             <th scope='col'>id</th>
//             <th scope='col'>nameSlot</th>
//             <th scope='col'>major</th>
//             <th scope='col'>timeSlot</th>
//             <th scope='col'>Decription</th>
//           </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//         {posts.map(item => {
//       return (
//         <tr key={item.id}>
//           <td>{ item.id }</td>
//           <td>{ item.nameSlot }</td>
//           <td>{ item.major }</td>
//           <td>{ item.timeSlot }</td>
//           <td>{ item.Decription }</td>
//         </tr>
//       );
//     })}
//         </MDBTableBody>
//         </MDBTable>
//     </div>

//   );

// }

// export default MentorSlotPageTable;

import {
  Scheduler,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
  AgendaView,
} from "@progress/kendo-react-scheduler";
import { useState } from "react";
import { guid } from "@progress/kendo-react-common";

const meetingRooms = {
  name: "Meeting Room",
  data: [
    {
      text: "Blue room",
      value: 1,
      color: "blue",
    },
    {
      text: "Red room",
      value: 2,
      color: "red",
    },
    {
      text: "Green room",
      value: 3,
      color: "green",
    },
  ],
  field: "RoomID",
  valueField: "value",
  textField: "text",
  colorField: "color",
};

const compareById = matchingItem => item => matchingItem.id === item.id;

const MentorSlotPageTable = props => {
  const [data, setData] = useState([]);

  const onDataChange = ({ created, updated, deleted }) => {
    // Add a unique id to each new item
    const newItemsWithIds = created.map(item => ({
      ...item,
      id: guid(),
    }));

    setData(dataState =>
      dataState.reduce((acc, item) => {
        // Skip the item if it was deleted
        if (deleted.find(compareById(item))) return acc;
        // Push the updated item or current item
        acc.push(updated.find(compareById(item)) || item);
        return acc;
      }, newItemsWithIds)
    );
  };

  return (
    <div className="k-my-8">
      <div className="k-mb-4 k-font-weight-bold">Manage slot</div>
      <Scheduler
        editable
        data={data}
        onDataChange={onDataChange}
        // resources={[meetingRooms]}
      >
        <TimelineView />
        <DayView />
        <WeekView />
        <MonthView />
        <AgendaView />
      </Scheduler>
    </div>
  );
};

export default MentorSlotPageTable;
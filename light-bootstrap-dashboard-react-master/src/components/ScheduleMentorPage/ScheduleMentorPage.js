import { Badge, Calendar, Modal, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import "components/ScheduleMentorPage/ScheduleMentorPage.css";
import axios from "axios";
const getListData = (value) => {
  let listData;

  switch (
    // fake data
    value.date()
  ) {
    case 8:
      listData = [
        // {
        //   type: "warning",
        //   content: "This is warning event.",
        // },
        // {
        //   type: "success",
        //   content: "This is usual event.",
        // },
      ];
      break;

    default:
  }

  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const ScheduleMentorPage = () => {
  const [posts, setPosts] = useState([]); // Get data lịch đã được mentor set sẵn

  useEffect(() => {
    axios
      .get("https://6331a1443ea4956cfb635d5f.mockapi.io/api/test/tableSlot")
      .then((res) => {
        setPosts(
          res.data.map((dataItem) => ({
            ...dataItem,
            Start: parseAdjust(dataItem.Start),
            End: parseAdjust(dataItem.End),
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // đổi string sang date
  const parseAdjust = (eventDate) => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
  };
  // lấy năm
  const currentYear = new Date().getFullYear();

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const [value, setValue] = useState(() => moment("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(() =>
    moment("2017-01-25")
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    //Tắt modal
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    // Giá trị nhập
    console.log(values);
  };
  const layout = {
    // layout của form
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onChange={showModal}
      />
      <Modal
        title="Booking mentor"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Subject"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Content">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ScheduleMentorPage;

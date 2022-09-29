import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <>
      <div> Trang đăng kí </div>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Sex">
          <Radio.Group>
            <Radio value="male"> male </Radio>
            <Radio value="female"> female </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>

        <Form.Item label="Role">
          <Select>
            <Select.Option value="AD">AD</Select.Option>
            <Select.Option value="US">US</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="BirthDay">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Button>Add</Button>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;

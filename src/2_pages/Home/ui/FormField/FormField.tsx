import { Button, Form, Input, Space } from "antd";

export default function FormField({ handleSubmit }: any) {
  return (
    <Form onFinish={handleSubmit}>
      <Space direction="horizontal" align="baseline">
        <Form.Item
          name="githubUsername"
          rules={[
            { required: true, message: "Please enter your GitHub username" },
          ]}
        >
          <Input placeholder="GitHub Username" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
}

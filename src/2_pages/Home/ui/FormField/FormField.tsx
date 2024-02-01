import { Button, Form, Input, Space } from "antd";

interface TFormField {
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

export default function FormField({ handleSubmit, isLoading }: TFormField) {
  return (
    <Form onFinish={(values) => handleSubmit(values)}>
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
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Create
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
}

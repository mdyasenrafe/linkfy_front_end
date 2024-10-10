import React, { useState } from "react";
import { Input, Button, Select, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

// Define a type for the link structure
interface Link {
  platform: string;
  url: string;
}

// Main Component
export const CustomizeLinks: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([
    { platform: "GitHub", url: "https://www.github.com/benwright" },
    { platform: "YouTube", url: "https://www.youtube.com/benwright" },
  ]);

  // Function to add a new blank link
  const addNewLink = (): void => {
    setLinks([...links, { platform: "", url: "" }]);
  };

  // Function to update a specific link's platform or URL
  const updateLink = (
    index: number,
    field: keyof Link,
    value: string
  ): void => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  // Function to remove a link
  const removeLink = (index: number): void => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md h-full">
      <h2 className="text-2xl font-semibold mb-2">Customize your links</h2>
      <p className="mb-4 text-gray-600">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="overflow-y-auto max-h-[60vh] mb-16">
        <Form layout="vertical">
          {links.map((link, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 p-4 rounded-lg"
            >
              <Form.Item label={`Link #${index + 1}`} className="font-bold">
                <div className="flex items-center space-x-4">
                  <Select
                    value={link.platform}
                    style={{ width: 140 }}
                    onChange={(value) => updateLink(index, "platform", value)}
                  >
                    <Option value="GitHub">GitHub</Option>
                    <Option value="YouTube">YouTube</Option>
                    <Option value="LinkedIn">LinkedIn</Option>
                  </Select>
                  <Input
                    placeholder="Enter link"
                    value={link.url}
                    onChange={(e) => updateLink(index, "url", e.target.value)}
                  />
                  <Button danger onClick={() => removeLink(index)}>
                    Remove
                  </Button>
                </div>
              </Form.Item>
            </div>
          ))}
          <Button
            type="dashed"
            onClick={addNewLink}
            block
            icon={<PlusOutlined />}
            className="mb-4"
          >
            Add new link
          </Button>
        </Form>
      </div>

      {/* Fixed Save Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white shadow-lg">
        <Button type="primary" block>
          Save
        </Button>
      </div>
    </div>
  );
};

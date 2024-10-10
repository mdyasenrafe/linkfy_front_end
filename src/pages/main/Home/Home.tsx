import React from "react";
import { MainLayout } from "../../../components/layouts";
import { Button, Container, Text } from "../../../components/atoms";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { LeftSidePreview } from "../../../components";
import { CustomizeLinks } from "./components";

export const Home = () => {
  const navigate = useNavigate();
  const user = {
    profileImage: "", // No image, so skeleton will appear
    links: [
      { platform: "GitHub", url: "https://github.com/", color: "bg-black" },
      { platform: "YouTube", url: "https://youtube.com/", color: "bg-red-600" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/",
        color: "bg-blue-600",
      },
    ],
  };
  return (
    <MainLayout>
      <Container>
        <Row className="my-12" gutter={[30, 16]}>
          <Col xs={24} lg={10}>
            <div className="bg-white rounded-lg">
              <LeftSidePreview profileImage="" links={user.links} />
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <CustomizeLinks />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

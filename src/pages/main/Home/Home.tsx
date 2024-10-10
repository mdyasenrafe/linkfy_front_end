import React from "react";
import { MainLayout } from "../../../components/layouts";
import { Button, Container, Text } from "../../../components/atoms";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Container>
        <Text>This is home text</Text>
        <Button className="my-4" onClick={() => navigate("/signup")}>
          go to Signup
        </Button>
      </Container>
    </MainLayout>
  );
};

import React from "react";
import { MainLayout } from "../../../components/layouts";
import { Button, Container, Text } from "../../../components/atoms";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Container>
        <Text>This is signup text</Text>
        <Button className="my-4" onClick={() => navigate("/")}>
          go to Home
        </Button>
      </Container>
    </MainLayout>
  );
};

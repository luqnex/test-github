import React, { useContext } from "react";

import UserContext from "../../context/Users";

import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

import { Container, Main } from "./styled";

export const Users = () => {
  const { user } = useContext(UserContext);

  const renderCard = Object.keys(user).length > 0;

  return (
    <Container>
      <Header />
      <Main>
        <Form />
        {renderCard && <Card user={user} />}
      </Main>
    </Container>
  );
};

import React, { FormEvent, useState, useContext } from "react";

import { api } from "../../services/api";
import { Card } from "../../components/Card";
import UserContext from "../../context/Users";

import { Container, Main } from "./styled";

import { Header } from "../../components/Header";
import { CustomButton } from "../../components/Button";
import { Form } from "../../components/Form";

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

import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { Navigate } from "react-router-dom";

import UserContext from "../../context/Users";

import { Header } from "../../components/Header";
import { CustomButton } from "../../components/Button";

import { Container, Main } from "./styled";

interface UserRepos {
  id: number;
  name: string;
  html_url: string;
  language: string;
  created_at: string;
}

export const Repositories = () => {
  const { user } = useContext(UserContext);
  const [repos, setRepos] = useState<UserRepos[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      await axios.get(`${user.repos_url}`).then((resp) => setRepos(resp.data));
    };

    fetchRepos();
  }, [user?.repos_url]);

  const hasUser = Object?.keys(user).length > 0;

  if (!hasUser) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Header />

      <Main>
        <div className="content">
          {repos.map((repo) => (
            <div key={repo.id} className="container">
              <p>{repo.name}</p>
              <p>{repo.language}</p>
              <p>{repo.created_at}</p>
              <a href={repo.html_url}>
                <CustomButton>Github</CustomButton>
              </a>
            </div>
          ))}
        </div>
      </Main>
    </Container>
  );
};

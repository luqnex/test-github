import { FormEvent, useState, useContext, useEffect } from "react"

import { api } from "../../services/api";
import { Card } from "../../components/Card";
import UserContext from "../../context/Users";

import { Container, Main } from './styled';

import { Header } from "../../components/Header";
import { CustomButton } from "../../components/Button";

/* interface UserProps {
    bio: string;
    name: string;
    login: string;
    repos_url: string;
    avatar_url: string;
    public_repos: number;
} */

export const Users = () => {
    const [input, setInput] = useState('');

    const { user, setUser } = useContext(UserContext);
    // const [user, setUser] = useState<UserProps>({} as UserProps);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        if (input !== '') {
            await api.get(`/${input}`)
            .then(resp => setUser(resp.data))
        }
    }

   /*  useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]) */

    const renderCard = Object.keys(user).length > 0;

    return (
        <Container>
            <Header />
            <Main>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setInput(e.target.value)} />    
                    <CustomButton itemType="submit" data-testid="search">Search</CustomButton>
                </form>

                {renderCard && (
                    <Card user={user} />
                )}
           </Main>
        </Container>
    )
}
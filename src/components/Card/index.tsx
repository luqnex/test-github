import { Link } from 'react-router-dom';

import { CardUser } from './styled';
import { CustomButton } from '../Button';

interface UserProps {
    bio: string;
    name: string;
    login: string;
    repos_url: string;
    avatar_url: string;
    public_repos: number;
}

interface CardProps {
    user: UserProps;
}

export const Card = ({ user }: CardProps) => {
    return (
        <CardUser>
            <img src={user.avatar_url} alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <p>Repositorios publicos: {user.public_repos}</p>
            <Link to="/repositories">
                <CustomButton>Repositorios</CustomButton>
            </Link>
        </CardUser>
    )
}
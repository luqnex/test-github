import { createContext, ReactNode, SetStateAction, useState } from "react";

interface UserProps {
    bio: string;
    name: string;
    login: string;
    repos_url: string;
    avatar_url: string;
    public_repos: number;
}

interface UserContextProps {
    user: UserProps;
    setUser: React.Dispatch<SetStateAction<UserProps>>;
}

interface UserContextProviderProps {
    children: ReactNode;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState({} as UserProps);

    return (
        <UserContext.Provider value={{
            user, 
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider };
export default UserContext;
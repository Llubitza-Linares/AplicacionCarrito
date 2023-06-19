import { ReactNode, createContext, useState } from "react";
const AuthContext = createContext({});

type AuthProviderProps = {
    children: ReactNode;
};

export type AuthContextType = {
    email: string;
    
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthContextType>({} as AuthContextType);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
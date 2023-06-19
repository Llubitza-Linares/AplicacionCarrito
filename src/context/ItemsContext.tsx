import { ReactNode, createContext, useState } from "react";
import CardData from "../models/ProductInterface";
const ItemsContext = createContext({});

type ItemProviderProps = {
    children: ReactNode;
};

export const ItemProvider = ({ children }: ItemProviderProps) => {
    const [items, setItems] = useState<CardData[]>([] as CardData[]);
    const [setItemEditar] = useState<CardData[]>([] as CardData[]);

    return (
        <ItemsContext.Provider value={{ items, setItems, setItemEditar }}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ItemsContext;
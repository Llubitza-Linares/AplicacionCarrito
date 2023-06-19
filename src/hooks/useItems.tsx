import { Dispatch, useContext } from "react";
import CardData from "../models/ProductInterface";
import ItemsContext from "../context/ItemsContext";

type ContextType = {
    items: CardData[];
    setItems: Dispatch<React.SetStateAction<CardData[]>>;
};

const useItems = () => {
    return useContext(ItemsContext) as ContextType;
};

export default useItems;
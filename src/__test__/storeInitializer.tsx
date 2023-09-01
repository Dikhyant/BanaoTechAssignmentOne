import {
    useDispatch
} from "react-redux";
import { initStore } from "../redux/action";
import { IStoreItem } from "../redux/store";

const StoreInitializer = () => {
    console.log("init")
    const initializeStore = () => {
        const dispatch = useDispatch();
    
        const storeItems: Array<IStoreItem> = new Array<IStoreItem>();

        storeItems.push({
            id: "1",
            backgroundColor: "#92CDF3"
        });

        storeItems.push({
            id: "2",
            backgroundColor: "#80E7BA"
        });

        storeItems.push({
            id: "3",
            backgroundColor: "#FCD689"
        });

        storeItems.push({
            id: "4",
            backgroundColor: "#D68D65"
        })

        storeItems.push({
            id: "5",
            backgroundColor: "#C55B65"
        })
    
        dispatch(initStore({
            storeItems: storeItems
        }))
    }

    initializeStore();
    return (
        <></>
    )
}

export default StoreInitializer;
import { useContext } from "react";
import GlobalContext from "../context/globalContext";

function useTask() {

    return useContext(GlobalContext);

}

export default useTask
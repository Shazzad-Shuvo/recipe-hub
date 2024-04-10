import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const useTheme = () => {
    const theme = useContext(ThemeContext);

    if(theme === undefined){
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return theme;
};

export default useTheme;
import {useAppSelector} from "./hooks";

export const useAuth = () => {
    const { user_access_level } = useAppSelector(state => state.appSlice);

    return {
        isAuth: !!user_access_level
    }
}
import {useAppSelector} from "./hooks";

export const useAuth = () => {
    const { email, password } = useAppSelector(state => state.userSlice);

    return {
        isAuth: !!email,
        password
    }
}
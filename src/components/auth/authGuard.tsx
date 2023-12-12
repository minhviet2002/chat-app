import { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";
import LoadingScreen from "../screen-loading/LoadingScreen";
import React, { useEffect } from "react";
type Props = {
    children: React.ReactNode
}

function AuthGuard({ children }: Props) {
    const { isAuthenciated } = useSelector((state: RootState) => state.auth);
    if (!true) {
        return <LoadingScreen />
    }

    return (
        <>
            {children}
        </>
    );
}

export default AuthGuard;
import { createContext, useReducer } from "react"
import AuthReducer from "./AuthRecuder"

//最初のユーザ状態を定義
const initialState = {
    user: null,
    isFetching: false,
    error: false
}

//状態をグローバルで管理する
//createContextで作成したコンポーネントはProviderが使えるようになる
export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    return (
        //Providerの情報はその子要素(今回はchildren)からどこでも利用できるようになる
        <AuthContext.Provider 
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
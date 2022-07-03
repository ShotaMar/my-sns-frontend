import { createContext, useReducer } from "react"
import AuthReducer from "./AuthRecuder"

//最初のユーザ状態を定義
// const initialState = {
//     user: null,
//     isFetching: false,
//     error: false
// }
const initialState = {
    user:{
        _id: '62aa05ceacb62a8278248741',
        username: "shota",
        email: "shota@gmail.com",
        password: "abcdefg",
        profilePicture: "/assets/person/1.png",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false,
        desc: "React勉強中",
    },
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
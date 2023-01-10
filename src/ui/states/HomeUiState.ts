import React from 'react'

export type HomeUiStateType = {
    email: string
    password: string
    errorMessage: string
}

export default function useHomeUiState(){

    const [login, setLogin] = React.useState<HomeUiStateType>({
        email: "",
        password: "",
        errorMessage: ""
        
        
    })

    return{
        login,
        setLogin,

        
      
        
    }
}


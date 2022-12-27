import { Button } from '@material-ui/core';
import React from 'react'
// import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from "../../redux/reducer/rootReducer";
import { getUsersFetch } from '../../redux/actions/actions';

export default function Home() {
    const dispatch = useDispatch();
    const abc = useSelector(state => state.users)
    console.log(abc)
    // const users = { name: "Rei" }


    return (
        <div>
            <Button onClick={() => dispatch(getUsersFetch())}>click</Button>
            users :


            {abc.map((user => (<div>{user.name} </div>))

            )}


        </div>
    )
}

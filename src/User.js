import React from 'react';

const User=(props)=>{
console.warn(props.data.name)
const {data}=props
    return(
        <div>
            <hi>User Component</hi>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}

export default User;
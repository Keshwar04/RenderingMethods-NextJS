import { todosListType, todosType } from '@/app/type';
import React from 'react'

const Todos = (props: todosType) => {
    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>{`${props.renderingType} component`}</h1>
            <div>{props.todos.length === 0 && 'Loading....'}</div>
            {props.todos.map((e: todosListType, idx: number) => (
                <div key={idx} style={{ marginTop: '5px' }}>{`${idx + 1}) `}{e.title}</div>
            ))}
        </div>
    )
}

export default Todos;
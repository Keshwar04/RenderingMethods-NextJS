import React from 'react';
import { fetchData } from '@/app/mockData'
import Todos from '../components/todos';

const Isr = async () => {
    const todos = await fetchData({ next: { revalidate: 2 } })

    const props = {
        todos: todos,
        renderingType: 'ISR'
    }
    return (
        <div>
            <Todos {...props} />
        </div>
    )
}

export default Isr
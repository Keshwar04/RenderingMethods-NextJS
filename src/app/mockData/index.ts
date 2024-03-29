export const fetchData = async (renderingType: Object) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', renderingType)
    const data = await res.json()
    return data;
}
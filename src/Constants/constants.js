export const setTargetValue = (callback) => {
    return (event) => {
        callback(event.target.value)
    }
}
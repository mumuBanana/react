export const changeNumber = (rgb, value) => {
    return {
        "type": "CHANGE",
        rgb,
        value
    }
}
const getInitialState = () => {
    const savedState = localStorage.getItem('cartState')
    if(savedState) {
        return JSON.parse(savedState)
    }

    return {
        total: 0,
        sum: 0,
        items: []
    }
}

const state = getInitialState()

export const saveState = () => {
    localStorage.setItem('cartState', JSON.stringify(state))
}

export default state
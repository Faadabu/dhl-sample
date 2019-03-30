export const onScr = () => {
    
    if (window.scrollY === 0) {
        return {type: 'SCROLLING'}
    }
    else if (window.scrollY !== 0) {
        return {type: 'NOT_SCROLLING'}
    }
};
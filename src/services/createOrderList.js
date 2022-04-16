const createOrderList = (start, maxi) => {
    const end = [...Array(maxi - start).keys()].map(x => x + start)
    const begin = [...Array(start).keys()]
    end.push(...begin)
    return end
}
export default createOrderList
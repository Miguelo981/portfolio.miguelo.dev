export function sortByDate(objectList: any) {
    objectList.sort((object1: any, object2: any) => new Date(object2.date).setHours(0, 0, 0, 0) - new Date(object1.date).setHours(0, 0, 0, 0))
}


export const generateUserName = (firstName, lastName) =>{
    let name = (firstName + lastName).toLowerCase().replace(/\s+/g, '');
    let number = Math.floor(100+ Math.random()*900)
    return `${name}${number}`
}
const users = new Map();

users.set('James', 'Admin')
users.set('Daniel', 'Admin')
users.set('Joshua', 'QA')
users.set('Annie', 'Developer')
users.set('Finn', 'User')

const getAdmins = (map, occupation) => {

    let admins = []
    for ([key, value] of map) {
        if (value === occupation) {
            admins.push(key)
        }
    }
    return admins
}

console.log(getAdmins(users, "Developer"))
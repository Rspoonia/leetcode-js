function typeCheck(object) {
    // Use console.log() for debugging 
    try {
        if(!Number.isInteger(object.age_int)) throw new Error()
        else if(typeof object.name_string !== 'string') throw new Error()
        else if(typeof object.job !== 'string' && object.job !== null) throw new Error()
        return true
    } catch (err) {
        console.error(err)
    }
}

const obj = {
    age_int: 2.1,
    name_string: "Adam",
    job: null,
}
console.log(typeCheck(obj))
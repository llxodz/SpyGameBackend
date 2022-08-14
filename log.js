const log = (...args) => {
    console.log((new Date).toLocaleString(), ...args)
}

exports.log = log;

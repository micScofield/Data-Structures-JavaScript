function xyz (str, data) {
    const startIdx = str.indexOf('{{')
    const endIdx = str.indexOf('}}')
    if (startIdx === -1) return str
    if (endIdx === -1) throw new Error('Invalid input')

    let substr = str.substring(startIdx+2, endIdx)
    let replaceWith = data[substr]
    str = str.substring(0, startIdx) + replaceWith + str.substring(endIdx+2)
    return xyz(str, data)
}

console.log(xyz('My name is {{firstname}} {{lastname}}', { firstname: 'Sanyam', lastname: 'Jain' }))
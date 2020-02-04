function makeFoldersArray() {
    return[
        {
            folder_id: 1,
            folder_name: 'Folder 1',
            date_created: '2019-01-22T16:28:32.615Z'
        }, 
        {
            folder_id: 2,
            folder_name: 'Folder 2',
            date_created: '2019-04-22T16:28:32.615Z'
        }, 
        {
            folder_id: 3,
            folder_name: 'Folder 3',
            date_created: '2019-05-22T16:28:32.615Z'
        }
    ]
}

function makeNewFolder() {
    return[
        {
            folder_name: 'New Folder 1',
        }
    ]
}

function makeUpdatedFolder() {
    return[
        {
            folder_id: 1,
            folder_name: 'Updated folder 1',
            date_created: '2019-01-22T16:28:32.615Z'
        }    
    ]
}

function makeFakeFolder() {
    return[
        {
            folder_id: 1,
            folder_age: 'fake folder'
        }
    ]
}

module.exports = {
    makeFoldersArray,
    makeNewFolder,
    makeUpdatedFolder,
    makeFakeFolder
}
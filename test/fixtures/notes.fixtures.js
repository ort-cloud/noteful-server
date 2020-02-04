function makeNotesArray() {
    return[
        {
            note_id: 1,
            note_name: 'Test Note 1',
            content: 'Test Note 1 Content',
            date_modified: '2019-01-22T16:28:32.615Z',
            folder_id: 1
        }, 
        {
            note_id: 2,
            note_name: 'Test Note 2',
            content: 'Test Note 2 Content',
            date_modified: '2019-01-22T16:28:32.615Z',
            folder_id: 2
        },
        {
            note_id: 3,
            note_name: 'Test Note 3',
            content: 'Test Note 3 Content',
            date_modified: '2019-01-22T16:28:32.615Z',
            folder_id: 1
        },
    ]
}

function makeNewNote() {
    return[
        {
            note_name: 'New Test Note 3',
            content: 'New Test Note 3 Content',
            folder_id: 1        
        }
    ]
}

function makeUpdatedNote() {
    return[
        {
            note_id: 1,
            note_name: 'Updated Test Note 3',
            content: 'Updated Test Note 3 Content',
            folder_id: 2
        }    
    ]
}

function makeFakeNote() {
    return[
        {
            note_id: 1,
            note_age: 'fake note'
        }
    ]
}

module.exports = {
    makeNotesArray,
    makeNewNote,
    makeUpdatedNote,
    makeFakeNote
}
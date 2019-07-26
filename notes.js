const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your Notes...'
}

//adding a note to the notes.json file
const addNote = function(title,body) {

        const notes = loadNotes()
        // const duplicateNotes = notes.filter(function(note){
        //     return note.title === title //checking duplicate note title
        // })
        const duplicateNote = notes.find((note)=>note.title === title)
        if (!duplicateNote){

            notes.push({
                title: title,
                body: body
            })
            saveNotes(notes)
            console.log(chalk.green.inverse('Note added!'))
        }
      else{
          console.log(chalk.red.inverse('Note title taken'))
      }
    
}

//removing a note from notes.json
const removeNote = function(title){

    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title //looking for titles other than the note to be removed and saving them i.e removing note with given title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    }else{

        console.log(chalk.red.inverse('no note found'))
    }   
}
const listNotes = function(){
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes!'))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNotes = function(title){
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
   if(note){
    console.log(chalk.blue.inverse(note.title))
    console.log(chalk.green.inverse(note.body))
   }else{
    console.log(chalk.red.inverse('No Notes in that name!'))
   }

}
//saving to json file
const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


//loading json file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){

        return []
    }
  
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}

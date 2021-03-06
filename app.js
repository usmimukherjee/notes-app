
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//create add command
yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder : {
        title:{//property
            describe:'Note Title',
            demandOption: true,//making title argument required
            type:'string'//type of argument should be string always
        },
        body:{
            describe:'Note body',
            demandOption : true,
            type : 'string'
        },
    },
    handler: (argv) => {
        notes.addNote(argv.title,argv.body) 
    }
})


//create remove command
yargs.command({

    command: 'remove',
    describe: 'Remove a new note',
    builder : {
        title:{//property
            describe:'Note Title',
            demandOption: true,//making title argument required
            type:'string'//type of argument should be string always
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title) 
    }
})


//create read command
yargs.command({

    command: 'read',
    describe: 'Reading a note',
    builder : {
        title:{//property
            describe:'Note Title',
            demandOption: true,//making title argument required
            type:'string'//type of argument should be string always
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }

})


//create read command
yargs.command({

    command: 'list',
    describe: 'Listing notes',
    handler: () => {
        notes.listNotes()
    }
})


//add remove read list
yargs.parse()//console.log(yargs.argv)
















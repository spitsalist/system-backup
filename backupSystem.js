const EventEmitter = require('events')
const emitter = new EventEmitter()

startBackup = (filename, emitter) => {
    console.log('Starting backup process')
    emitter.emit('backup', filename)

    setTimeout(()=>{
        console.log(`Backup process completed for file: ${filename}`)
    }, 1000)
}

emitter.on('backup', (filename) => {
    const timestamp = new Date().toDateString()
    console.log(`Backup started for file: ${filename}, Timestamp: ${timestamp}`)
})

startBackup('database_backup.sql', emitter)
startBackup('user_data_backup.json', emitter)
startBackup('system_logs_backup.txt', emitter)


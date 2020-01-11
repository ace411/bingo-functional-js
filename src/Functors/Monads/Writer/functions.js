const Writer = require('./writer')

const tell = msg => new Writer(() => [null, [msg]])

const writer = (result, output) => Writer.of(result, output)

const runWriter = writer => writer.run()

const execWriter = writer => head(runWriter(writer))

module.exports = {
    tell,
    writer,
    runWriter,
    execWriter
}

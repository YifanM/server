const Fixtures = require('node-mongodb-fixtures');
const fixtures = new Fixtures({
    dir: './fixtures',
    mute: false
});

fixtures
    .connect('mongodb://localhost:27017/gomoku')
    .then(() => fixtures.unload())
    .then(() => fixtures.load())
    .then(() => fixtures.disconnect());

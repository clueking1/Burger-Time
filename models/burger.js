const orm = require('../config/orm')

const burger = {
    all: function() {
        orm.selectAll(res => res )
    },
    create: function() {
        orm.insertOne(burgerName, res => res)
    },
    create: function() {
        orm.insertOne(burgerName, burgerId, res => res)
    },
}

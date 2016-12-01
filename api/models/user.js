module.exports = {
  attributes: {
    username: {
    type: 'text',
      required: true
  },
    password: {
  type: 'text',
      required: true
    },
    vip: {
  type: 'boolean', defaultsTo: false, required: true
},
    isEnabled: {
  type: 'boolean', required: true,
defaultsTo: true }
}
};


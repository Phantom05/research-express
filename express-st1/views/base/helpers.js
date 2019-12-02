var helpers = require('handlebars-helpers')();
const {block,extend} =blockExtend();

function blockExtend() {
  var blocks = Object.create(null);
  return {
    extend: function (name, context) {
      var block = blocks[name];
      if (!block) {
        block = blocks[name] = [];
      }
      block.push(context.fn(this));
    },
    block: function (name) {
      var val = (blocks[name] || []).join('\n');
      // clear the block
      blocks[name] = [];
      return val;
    }
  }
};

function ifCond(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
};

function setVariable(varName, varValue, options){
  if (!options.data.root) {
    options.data.root = {};
  }
  options.data.root[varName] = varValue;
};

helpers.setVariable = setVariable;
helpers.ifCond      = ifCond;
helpers.block       = block;
helpers.extend      = extend;


export {
  helpers,
}

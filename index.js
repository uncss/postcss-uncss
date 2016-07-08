try {
  module.exports=require('uncss').postcssPlugin;
} catch (e) {
  console.error('An error was encountered in postcss-uncss; do you have uncss installed as a dependency?');
  console.error(e);
}

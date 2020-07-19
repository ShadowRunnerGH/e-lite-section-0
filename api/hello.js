module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send(`Hello ${name}!`)
}
function myFunction() {
  var elements = document.getElementById("myForm").elements;
  var obj = {};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }

  document.getElementById("demo").innerHTML = JSON.stringify(obj);
}
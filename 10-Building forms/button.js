function init()
{
    document.getElementById("btn").onclick=choose;

}

function choose()
{
  document.getElementById("pepperoni").checked=true;
}

window.onload=init;
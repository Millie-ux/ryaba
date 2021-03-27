const var1Js = $('#var_1');
const var2Js = $('#var_2');
const var3Js = $('#var_3');
const var4Js = $('#var_4');
const var5Js = $('#var_5');
const var6Js = $('#var_6');
const speechJs = $('#speech');

const btnCreate = $('#j-btn');

const textReplace = $('#j-text');

const btnReplace = $('#j-btn2');

const object = {
  "text":["Жили-были {var1} да {var2}",
  "Была у них {var3}",
  "Снесла {var3} {var4}, не простое - золотое",
  "- {var1} бил, бил - не разбил",
  "- {var2} била, била - не разбила",
  "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
  "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speech}"]
}



btnCreate.click(function() {
  textReplace.html(object.text);
})

btnReplace.click(function() {
  const var1 = var1Js.val();
  const var2 = var2Js.val();
  const var3 = var3Js.val();
  const var4 = var4Js.val();
  const var5 = var5Js.val();
  const var6 = var6Js.val();
  const speech = speechJs.val();

  const secondObject = {
    "text":[`Жили-были ${var1} да ${var2}`,
    `Была у них ${var3}`,
    `Снесла ${var3} ${var4}, не простое - золотое`,
    `- ${var1} бил, бил - не разбил`,
    `- ${var2} била, била - не разбила`,
    `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
    `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,`${speech}`]
  };
  
  textReplace.html(secondObject.text);

})






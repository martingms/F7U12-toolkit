/*
 *      Rage face editor by martingamm   
 *
 */

var injecthtml = '<a href="/xxx" onclick="addFace($(this),\'xxx\');return false;"></a>';
var codes = ['troll','fu','lol','poker','ok','wetodddog','sadtroll','high','son',
             'fy1','yey','uhm','happy','beh','gah','perfect','wat','ewbte','pft','futext',
             'megusta','dude','rtroll','rmilk','milk','pickletime','jasonqualman','ewbtetext',
             'pfttext','harpdarp','gwah','ghappy','gohno','gfu','gsmile','gbeh','gwat','guhm',
             'gyey','gtongue','vuvu','red','notsure','blackhair','omg','eyes','awman','straight',
             'pissed','hmm','whoa','hehheh','bepinthemorning','welp','melvin','itstime',
             'aintthatsomeshit','cereal','ohcrap','gtroll','notokay','fap','nomegusta','awyeah',
             'surprised','why','yuno','bepistrollingyoubetter','trolldad','okay','dumbbitch','wtf',
             'teethrage','megustaperfect','foreveralone','schlick','ilovethebeefytaco', '21424',
             'HAHAHAHAHA', 'ohisthatacarrot'];

function injectFaceEditor() {
    var textforms = $("form[class='usertext cloneable']");
    var buttons = $(".usertext-buttons");
    buttons.append('<button type="button" id="facebutton" onclick="$(this).parent().parent().parent().next(\'.ragefaces\').slideToggle()"><b>Pick a face!</b></button>');
    textforms.append('<div class="ragefaces">');
    var ragefaces = $("div[class='ragefaces']");
    for(var i=0;i<codes.length;i++) {
        ragefaces.append(injecthtml.replace(/xxx/g,codes[i]));
    }

}

//TODO optimize selector 
function addFace(anchor,code) {
    var selectedForm = anchor.parent().parent().children("div").children(id="").find("textarea")[0];
    selectedForm.value += "[](/"+code+" \"\")";
}

function stylizer() {
    var ragefaces = $("div[class='ragefaces']");
    ragefaces.css("display","block");
    ragefaces.css("border","1px solid grey");
    ragefaces.css("width","503px");
    ragefaces.css("border-radius","10px");
    ragefaces.css("padding","5px");
    ragefaces.hide();
}

injectFaceEditor();
stylizer();

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-22633348-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

function getArgs()
{
  var lo=window.location.toString();
  if(lo.indexOf('?')==-1) return;
  if(lo.indexOf('#')>-1) var args=lo.substring(lo.indexOf('?')+1,lo.indexOf('#'));
  else var args=lo.substring(lo.indexOf('?')+1);
  var argh={};
  var arga=args.split('&');
  for(var i=0;i<arga.length;++i)
  {
    argh[arga[i].split('=')[0]]=arga[i].split('=')[1];
  }
  return argh;
};
var args = getArgs();
if(args && args['token']) document.cookie='token='+args['token']+';expires='+(new Date(new Date().getTime()+1460*24*60*60*1000))

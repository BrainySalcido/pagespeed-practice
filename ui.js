!function(e,t){function n(e,t){for(var n=e.className.split(/\s+/),i=n.length,l=0;i>l;l++)if(n[l]===t){n.splice(l,1);break}i===n.length&&n.push(t),e.className=n.join(" ")}var i=t.getElementById("layout"),l=t.getElementById("menu"),a=t.getElementById("menuLink");a.onclick=function(e){var t="active";e.preventDefault(),n(i,t),n(l,t),n(a,t)}}(this,this.document);
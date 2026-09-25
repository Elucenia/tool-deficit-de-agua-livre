/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"deficit-de-agua-livre","title":"Déficit de água livre","fields":[["na","Sódio","num",{"min":120,"max":200,"unit":"mEq/L","ph":"155"}],["peso","Peso","num",{"min":2,"max":300,"step":0.1,"unit":"kg","ph":"70"}],["grupo","Água corporal total","radio",{"opts":{"0.6":"Homem &lt; 65 anos ou criança","0.5":"Mulher &lt; 65 anos ou homem ≥ 65","0.45":"Mulher ≥ 65 anos"}}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);

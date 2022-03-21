
String.prototype.replaceLast = function (find, replace) {
  let code = this.toLowerCase()
    const index = code.lastIndexOf(find?.toLowerCase());

  if (index >= 0) {
    return (
      this.substring(0, index) + replace + this.substring(index + find.length)
    );
  }

  return this.toString();
}

    
   

 String.prototype.delB = function () {
return this.replace(/\[/g, "#RIGHT#")
.replace(/]/g, "#LEFT#")
.replace(/;/g, "#SEMI#")
.replace(/:/g, "#COLON#")
.replace(/\$/g, "#CHAR#")
.replace(/>/g, "#RIGHT_CLICK#")
.replace(/</g, "#LEFT_CLICK#")
                   .replace(/=/g, "#EQUAL#")
.replace(/{/g, "#RIGHT_BRACKET#")
.replace(/}/g, "#LEFT_BRACKET#")
.replace(/,/g, "#COMMA#")
.replace(/\(/g, "#LB#")
.replace(/\)/g, "#RB#")
.replace(/&&/g, "#AND#")
.replaceAll("||", "#OR#");
} 

 


String.prototype.addB = function () {
return this.replace(/#RIGHT#/g, "[")
.replace(/#LEFT#/g, "]")
.replace(/#SEMI#/g, ";")
.replace(/#COLON#/g, ":")
.replace(/#CHAR#/g, "$")
.replace(/#RIGHT_CLICK#/g, ">")
.replace(/#LEFT_CLICK#/g, "<")
.replace(/#EQUAL#/g, "=")
.replace(/#RIGHT_BRACKET#/g, "{")
.replace(/#LEFT_BRACKET#/g, "}")
.replace(/#COMMA#/g, ",")
.replace(/#LB#/g, "(")
.replace(/#RB#/g, ")")
.replace(/#AND#/g, "&&")
.replace(/#OR#/g, "||");
}
    

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['curator'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(((helper = (helper = helpers['form-error'] || (depth0 != null ? depth0['form-error'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"form-error","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['exhibit-preview'], '	     	', 'exhibit-preview', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"curator\">\n	<div class = \"page-header\">\n	    <h1> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.username : stack1), depth0))
    + "'s Curator Panel </h1>\n	</div>\n	<div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n	<!-- Form for creating new Exhibit -->\n  	<button class=\"btn btn-lg\" data-toggle=\"modal\" data-target=\"#new-exhibit-modal\" id=\"create-exhibit-modal-btn\"> Create an Exhibit </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"new-exhibit-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"new-exhibit-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"new-group-modal-label\">Create an Exhibit</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"exhibit-creation-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-exhibit-title\"> Title </label>\n				<input type=\"text\" name=\"title\" id =\"new-exhibit-title\" class=\"form-control\" placeholder=\"Exhibit Title\" required />\n			</div>\n\n			<div class=\"form group\">\n				<label for=\"new-exhibit-dateStart\"> Start Date </label>\n				<input type=\"datetime-local\" name=\"dateStart\" id=\"new-exhibit-dateStart\" class=\"form-control\" required>\n	      	</div>\n\n			<div class=\"form group\">\n				<label for=\"new-exhibit-dateEnd\"> End Date </label>\n				<input type=\"datetime-local\" name=\"dateEnd\" id=\"new-exhibit-dateEnd\" class=\"form-control\" required>\n	      	</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-exhibit-description\"> Description </label> \n				<input type=\"text\" name=\"description\" id =\"new-exhibit-description\" class=\"form-control\" placeholder=\"Exhibit Description\" required />\n			</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-exhibit-location\"> Location </label> \n				<input type=\"text\" name=\"location\" id =\"new-exhibit-location\" class=\"form-control\" placeholder=\"Exhibit Location (i.e gallery or museum name)\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" id=\"create-exhibit-btn\">Create</button>\n        </div>\n      </div>\n    </div>\n  </div>\n	<!-- Form for creating new Curator -->\n  	<button class=\"btn btn-lg\" data-toggle=\"modal\" data-target=\"#new-curator-modal\" id=\"create-curator-modal-btn\"> Create a New Curator </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"new-curator-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"new-exhibit-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"new-group-modal-label\">Create a New Curator</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"curator-creation-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-username\"> Username </label>\n				<input type=\"text\" name=\"username\" id =\"new-curator-username\" class=\"form-control\" placeholder=\"Username\" required />\n			</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-password\"> Password </label> \n				<input type=\"text\" name=\"password\" id =\"new-curator-password\" class=\"form-control\" placeholder=\"Password\" required />\n			</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-password-confirm\"> Confirm Password </label> \n				<input type=\"text\" name=\"confirm\" id =\"new-curator-password-confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required />\n			</div>\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-email\"> Email </label> \n				<input type=\"text\" name=\"email\" id =\"new-curator-email\" class=\"form-control\" placeholder=\"Email\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" id=\"create-curator-btn\">Create</button>\n        </div>\n      </div>\n    </div>\n  </div>\n	<div id=\"curatorexhibits\">\n	     <h2> Exhibits I Created </h2>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.exhibits : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	</div>\n</div>";
},"usePartial":true,"useData":true});
templates['exhibit-preview'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"exhibit-preview panel panel primary\" data-exhibit-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n<div class=\"panel-heading\">\n	<h1 class=\"panel-title\"> "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n<div class = \"panel-body\">\n	<h5>"
    + escapeExpression(((helper = (helper = helpers.dateStart || (depth0 != null ? depth0.dateStart : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateStart","hash":{},"data":data}) : helper)))
    + "</h5>\n	<h5>"
    + escapeExpression(((helper = (helper = helpers.dateEnd || (depth0 != null ? depth0.dateEnd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateEnd","hash":{},"data":data}) : helper)))
    + "</h5>\n	<h5>"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "</h5>\n	<button class=\"btn view-exhibit-btn\" id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "> View </button>\n</div>\n\n";
},"useData":true});
templates['exhibit'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<!-- Form for creating adding a Resource -->\n  	<button class=\"btn btn-lg\" data-toggle=\"modal\" data-target=\"#add-resource-modal\" id=\"add-resource-modal-btn\"> Add Resource </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"add-resource-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-resource-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-resource-modal-label\">Create an Exhibit</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"add-resource-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-resource-name\"> Name </label>\n				<input type=\"text\" name=\"name\" id =\"add-resource-name\" class=\"form-control\" placeholder=\"Resource Name\" required />\n			</div>\n\n			<div class=\"form group\">\n				<label for=\"add-resource-link\"> Start Date </label>\n				<input type=\"text\" name=\"link\" id=\"add-resource-link\" class=\"form-control\" required>\n	      	</div>\n\n			<div class=\"form group\">\n				<label for=\"add-resource-highlight\"> Highlight </label>\n				<input type=\"text\" name=\"highlight\" id=\"add-resource-highlight\" class=\"form-control\" required>\n	      	</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-resource-description\"> Description </label> \n				<input type=\"text\" name=\"description\" id =\"add-resource-description\" class=\"form-control\" placeholder=\"Resource Description\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" id=\"add-resource-btn\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- Form for creating adding an Influence -->\n  	<button class=\"btn btn-lg\" data-toggle=\"modal\" data-target=\"#add-influence-modal\" id=\"add-influence-modal-btn\"> Add Influence </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"add-influence-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"new-exhibit-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-influence-modal-label\">Create an Exhibit</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"add-influence-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-influence-name\"> Name </label>\n				<input type=\"text\" name=\"name\" id =\"add-influence-name\" class=\"form-control\" placeholder=\"Resource Name\" required />\n			</div>\n\n			<div class=\"form group\">\n				<label for=\"add-influence-image\"> Representative Image </label>\n				<input type=\"text\" name=\"image\" id=\"add-influence-image\" class=\"form-control\" required>\n	      	</div>\n\n			<div class=\"form group\">\n				<label for=\"add-influence-artist\"> Highlight </label>\n				<input type=\"text\" name=\"artist\" id=\"add-influence-artist\" class=\"form-control\" required>\n	      	</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-influence-description\"> Description </label> \n				<input type=\"text\" name=\"description\" id =\"add-influence-description\" class=\"form-control\" placeholder=\"Description of Influence Impact\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" id=\"add-influence-btn\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- Form for adding a Piece -->\n  	<button class=\"btn btn-lg\" data-toggle=\"modal\" data-target=\"#add-piece-modal\" id=\"add-piece-modal-btn\"> Add Piece </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"add-piece-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-piece-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-piece-modal-label\">Add a Piece</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n	 	<form id=\"add-piece-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-piece-title\"> Title </label>\n				<input type=\"text\" name=\"title\" id =\"add-piece-title\" class=\"form-control\" placeholder=\"RPiece Title\" required />\n			</div>\n\n			<div class=\"form group\">\n				<label for=\"add-piece-year\"> Year </label>\n				<input type=\"text\" name=\"year\" id=\"add-piece-year\" class=\"form-control\" required>\n	      	</div>\n\n			<div class=\"form group\">\n				<label for=\"add-piece-artist\"> Atrist </label>\n				<input type=\"text\" name=\"artist\" id=\"add-piece-artist\" class=\"form-control\" required>\n	      	</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-piece-description\"> Description </label> \n				<input type=\"text\" name=\"description\" id =\"add-piece-description\" class=\"form-control\" placeholder=\"Piece Description\" required />\n			</div>\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-piece-image\"> Image </label> \n				<input type=\"text\" name=\"description\" id =\"add-piece-image\" class=\"form-control\" placeholder=\"Image Link\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" id=\"add-piece-btn\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n		<button class=\"btn publish\" id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "> Publish </button>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(((helper = (helper = helpers['form-error'] || (depth0 != null ? depth0['form-error'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"form-error","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['resource-panel'], '			', 'resource-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['influence-panel'], '			', 'influence-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['piece-preview'], '			', 'piece-preview', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"curator\">\n	<div class = \"page-header\">\n	    <h1> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.title : stack1), depth0))
    + " </h1>\n	</div>\n	<div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.madeByUser : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"exhibit-info\">\n		<h2> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h2>\n		<h2> Start Date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.dateStart : stack1), depth0))
    + " </h2>\n		<h2> End Date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.dateEnd : stack1), depth0))
    + " </h2>\n		<h2> Location: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.location : stack1), depth0))
    + " </h2>\n	</div>\n\n	<div class=\"resources\">\n		<h2> Resources </h2>\n		<h3> Use these resources to prepare for your visit to the exhibit </h3>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.resources : stack1), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n\n	<div class=\"influences\">\n		<h2> Influences </h2>\n		<h3> This exhibit drew inspiration from the following sources </h3>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.influences : stack1), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n\n	<div class=\"pieces\">\n		<h2> Pieces </h2>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.pieces : stack1), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>";
},"usePartial":true,"useData":true});
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"gallery\">\n  <div class = \"page-header\">\n    <h1> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.username : stack1), depth0))
    + "'s Gallery </h1>\n  </div>\n</div>\n  <div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n </div>";
},"useData":true});
templates['login'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"login\">\n  <h1>Log In</h3>\n  <div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <form id=\"login-form\">\n    <div class=\"form-group\"><input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required /></div>\n    <div class=\"form-group\"><input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required /></div>\n    <button type=\"submit\" class =\"btn btn-default\" id=\"login-submit\"> Log In </button>\n  </form>\n</div>";
},"useData":true});
templates['nav'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id ='nav-items' <ul class='navbar-nav nav'> \n     <ul class='nav navbar-nav navbar-right'>\n     <li><a href='#' id = 'profile-button'>Profile</a></li>\n     <li><a href='#' id='logout-link'>Logout</a></li></ul>\n  </ul></div>";
  },"useData":true});
templates['piece'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
templates['signup'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"signup\">\n  <h1>Sign Up</h1>\n  <div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <form id=\"signup-form\">\n    <div class=\"form-group\"><input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required /></div>\n    <div class=\"form-group\"><input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required /></div>\n    <div class=\"form-group\"><input type=\"password\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required /></div>\n    <div class=\"form-group\"><input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Your MIT Email\" required /></div>\n    <div class=\"form-group\"><input type=\"text\" name=\"role\" class=\"form-control\" placeholder=\"Role\" required /></div>\n    <button type=\"submit\" class =\"btn btn-default\" id=\"signup-submit\"> Sign Up </button>\n  </form>\n</div>";
},"useData":true});
templates['welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"welcome\">\n	<div class = \"page-header jumbotron\">\n		<h1> Welcome to Art App</h1>\n        <div class=\"nav nav-pills\">\n	 	<li><button class=\"btn btn-default\" id = \"signup-btn\"> Signup</button></li>\n	  	<li><button class=\"btn btn-default\" id=\"login-btn\"> Login</button> </li>\n	</div>\n	</div>\n\n</div>";
  },"useData":true});
})();
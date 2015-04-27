(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contribution-panel'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "<div class=\"panel-primary contribution\">\n	<div class=\"panel-heading contribution-header\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.local : stack1)) != null ? stack1.username : stack1), depth0))
    + "</div>\n	<div class=\"panel-body\">"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});
templates['curator-nav'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id ='nav-items' <ul class='navbar-nav nav'> \n     <ul class='nav navbar-nav navbar-right'>\n     <li><a href='#' id = 'curator-panel-btn'>Curator Panel</a></li>\n     <li><a href='#' id='logout-link'>Logout</a></li></ul>\n  </ul></div>";
  },"useData":true});
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
  var stack1, buffer = "		     	<div class=\"col-md-3 col-sm-4\">\n";
  stack1 = this.invokePartial(partials['exhibit-preview'], '		     		', 'exhibit-preview', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		     	</div>\n";
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
  buffer += "            </div>\n	 	<form id=\"curator-creation-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-username\"> Username </label>\n				<input type=\"text\" name=\"username\" id =\"new-curator-username\" class=\"form-control\" placeholder=\"Username\" required />\n			</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-password\"> Password </label> \n				<input type=\"text\" name=\"password\" id =\"new-curator-password\" class=\"form-control\" placeholder=\"Password\" required />\n			</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-password-confirm\"> Confirm Password </label> \n				<input type=\"text\" name=\"confirm\" id =\"new-curator-password-confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required />\n			</div>\n	     	<div class=\"form-group\">\n	 	    	<label for=\"new-curator-email\"> Email </label> \n				<input type=\"text\" name=\"email\" id =\"new-curator-email\" class=\"form-control\" placeholder=\"Email\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" id=\"create-curator-btn\">Create</button>\n        </div>\n      </div>\n    </div>\n  </div>\n	<div id=\"curatorexhibits\">\n	     <h2> Exhibits I Created </h2>\n	     <div class=\"row\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.exhibits : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	     </div>\n\n	</div>\n</div>";
},"usePartial":true,"useData":true});
templates['exhibit-preview'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"panel-primary exhibit-preview\" data-exhibit-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n<div class=\"panel-heading\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n<div class = \"panel-body\">\n	<h5>"
    + escapeExpression(((helper = (helper = helpers.dateStart || (depth0 != null ? depth0.dateStart : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateStart","hash":{},"data":data}) : helper)))
    + "</h5>\n	<h5>"
    + escapeExpression(((helper = (helper = helpers.dateEnd || (depth0 != null ? depth0.dateEnd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateEnd","hash":{},"data":data}) : helper)))
    + "</h5>\n	<h5>"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "</h5>\n	<button class=\"btn view-exhibit-btn\" id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "> View </button>\n</div>\n</div>\n";
},"useData":true});
templates['exhibit'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<button class=\"btn btn-sm\" id=\"visit-exhibit-btn\" exhibit_id="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1._id : stack1), depth0))
    + ">Visit</button>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.published : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<!-- Form for creating adding a Resource -->\n  	<button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#add-resource-modal\" id=\"add-resource-modal-btn\"> Add Resource </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"add-resource-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-resource-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-resource-modal-label\">Add a Resource</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"add-resource-form\" class=\"form-inline\">\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-resource-name\"> Name </label>\n				<input type=\"text\" name=\"name\" id =\"add-resource-name\" class=\"form-control\" placeholder=\"Resource Name\" required />\n			</div>\n\n			<div class=\"form group\">\n				<label for=\"add-resource-link\"> Link to Resource http://</label>\n				<input type=\"url\" name=\"link\" id=\"add-resource-link\" class=\"form-control\" required>\n	      	</div>\n\n			<div class=\"form group\">\n				<label for=\"add-resource-highlight\"> Highlight </label>\n				<input type=\"text\" name=\"highlight\" id=\"add-resource-highlight\" class=\"form-control\" required>\n	      	</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-resource-description\"> Description </label> \n				<input type=\"text\" name=\"description\" id =\"add-resource-description\" class=\"form-control\" placeholder=\"Resource Description\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" exhibit_id="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1._id : stack1), depth0))
    + " id=\"add-resource-btn\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n	<!-- Form for creating adding a Influence-->\n  	<button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#add-influence-modal\" id=\"add-influence-modal-btn\"> Add Influence </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"add-influence-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-influence-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-influence-modal-label\">Add an Influence</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"add-influence-form\" class=\"form-inline\">\n\n			<div class=\"form group\">\n				<label for=\"add-influence-artist\">Artist</label>\n				<input type=\"text\" name=\"artist\" id=\"add-influence-artist\" class=\"form-control\" placeholder=\"Artist\" required>\n	      	</div>\n\n<!-- 			<div class=\"form group\">\n				<label for=\"add-influence-image\"> Representative Image </label>\n				<input type=\"text\" name=\"image\" id=\"add-influence-image\" class=\"form-control\" required>\n	      	</div> -->\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-influence-description\">Description</label> \n				<input type=\"text\" name=\"description\" id =\"add-influence-description\" class=\"form-control\" placeholder=\"Description of Influence Impact\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" exhibit_id="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1._id : stack1), depth0))
    + " id=\"add-influence-btn\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n	<!-- Form for adding a piece-->\n  	<button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#add-piece-modal\" id=\"add-piece-modal-btn\"> Add Piece </button>\n  	<!-- Modal -->\n  	<div class=\"modal fade\" id=\"add-piece-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-piece-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-piece-modal-label\">Add a Piece</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n	 	<form id=\"add-piece-form\" class=\"form-inline\">\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-piece-title\">Title</label>\n				<input type=\"text\" name=\"title\" id =\"add-piece-title\" class=\"form-control\" placeholder=\"Piece Title\" required />\n			</div>\n\n			<div class=\"form group\">\n				<label for=\"add-piece-year\">Year</label>\n				<input type=\"text\" name=\"year\" id=\"add-piece-year\" class=\"form-control\" placeholder=\"Year\" required>\n	      	</div>\n\n			<div class=\"form group\">\n				<label for=\"add-piece-artist\">Atrist</label>\n				<input type=\"text\" name=\"artist\" id=\"add-piece-artist\" class=\"form-control\" placeholder=\"Artist Name\" required>\n	      	</div>\n\n	     	<div class=\"form-group\">\n	 	    	<label for=\"add-piece-description\">Description</label> \n				<input type=\"text\" name=\"description\" id =\"add-piece-description\" class=\"form-control\" placeholder=\"Piece Description\" required />\n			</div>\n  		</form>\n	</div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn\" exhibit_id="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1._id : stack1), depth0))
    + " id=\"add-piece-btn\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.published : stack1), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"6":function(depth0,helpers,partials,data) {
  return "		<h4>Published</h4>\n";
  },"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(((helper = (helper = helpers['form-error'] || (depth0 != null ? depth0['form-error'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"form-error","hash":{},"data":data}) : helper)))
    + "\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n		<button class=\"btn btn-sm\" exhibit_id="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1._id : stack1), depth0))
    + " id='publish'> Publish </button>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<div class=\"col-md-3\">\n";
  stack1 = this.invokePartial(partials['piece-preview'], '					', 'piece-preview', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['resource-panel'], '			', 'resource-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['influence-panel'], '			', 'influence-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"curator\">\n	<div class = \"page-header\">\n	    <h1> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.title : stack1), depth0))
    + " </h1>\n	</div>\n	<div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visitor : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.madeByUser : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"exhibit-info\">\n		<h5> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h5>\n		<h5> Start Date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.dateStart : stack1), depth0))
    + " </h5>\n		<h5> End Date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.dateEnd : stack1), depth0))
    + " </h5>\n		<h5> Location: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.location : stack1), depth0))
    + " </h5>\n	</div>\n\n	<div>\n<div class=\"exhibit-tabpanel\" role=\"tabpanel\">\n\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#pieces\" id=\"pieces-tab\" aria-controls=\"pieces\" role=\"tab\" data-toggle=\"tab\">Pieces</a></li>\n    <li role=\"presentation\"><a href=\"#resources\" id=\"resources-tab\" aria-controls=\"resources\" role=\"tab\" data-toggle=\"tab\">Resources</a></li>\n    <li role=\"presentation\"><a href=\"#influences\" id=\"influences-tab\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Influences</a></li>\n  </ul>\n\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n      <div role=\"tabpanel\" class=\"tab-pane active\" id=\"pieces\" aria-labelledby=\"pieces-tab\">\n		<div class=\"row\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.pieces : stack1), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"resources\" aria-labelledby=\"resources-tab\">\n		<h3> Use these resources to prepare for your visit to the exhibit </h3>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.resources : stack1), {"name":"each","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		<p> </p>\n	</div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"influences\" aria-labelledby=\"influences-tab\">\n    		<h3> This exhibit drew inspiration from the following sources </h3>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.exhibit : depth0)) != null ? stack1.influences : stack1), {"name":"each","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		<p> </p>\n    </div>\n  </div>\n\n</div>";
},"usePartial":true,"useData":true});
templates['gallery'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.published : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<div class=\"col-md-3 col-sm-4\">\n";
  stack1 = this.invokePartial(partials['exhibit-preview'], '					', 'exhibit-preview', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"gallery\">\n  <div class = \"page-header\">\n    <h1> "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.username : stack1), depth0))
    + "'s Gallery </h1>\n  </div>\n</div>\n  <div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n </div>\n<div class = \"exhibits\">\n	<div class=\"row\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.exhibits : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>";
},"usePartial":true,"useData":true});
templates['influence-panel'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h2>"
    + escapeExpression(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"artist","hash":{},"data":data}) : helper)))
    + "</h2>\n<h5>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</h5>";
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
  return "<div id ='nav-items' <ul class='navbar-nav nav'> \n     <ul class='nav navbar-nav navbar-right'>\n     <li><a href='#' id = 'profile-btn'>Profile</a></li>\n     <li><a href'#' id= 'gallery-link'>Gallery</a></li>\n     <li><a href='#' id='logout-link'>Logout</a></li></ul>\n  </ul></div>";
  },"useData":true});
templates['piece-preview'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"thumbnail\">\n	<img src="
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ">\n		<div class=\"caption\">\n			<h3>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n			<p>"
    + escapeExpression(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"artist","hash":{},"data":data}) : helper)))
    + "</p>\n			<button class=\"btn view-piece-btn\" id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "> View </button>\n		</div>\n</div>";
},"useData":true});
templates['piece'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      "
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "  <form id        =  \"uploadForm\"\n     enctype   =  \"multipart/form-data\"\n     action    =  \"/piece/image/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1._id : stack1), depth0))
    + "\"\n     method    =  \"post\"\n>\n<input type=\"file\" name=\"uploadedImage\" />\n<input type=\"hidden\" value ="
    + escapeExpression(((helper = (helper = helpers.piece_id || (depth0 != null ? depth0.piece_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"piece_id","hash":{},"data":data}) : helper)))
    + " name = \"piece_id\" id=\"piece_id_upload\">\n<input type=\"submit\"  value=\"Upload Image\" name=\"submit\">\n</form>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    <!-- Form for adding a question -->\n  <button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#add-question-modal\" id=\"add-question-modal-btn\"> Add Question </button>\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"add-question-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-question-modal-label\" aria-hidden=\"true\">\n<div class=\"modal-dialog\">\n  <div class=\"modal-content\"> \n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n        <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n      </button>\n      <h3 class=\"modal-title\" id=\"add-question-modal-label\">Add a Question</h3>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n  <form id=\"add-question-form\" class=\"form-inline\">\n      <div class=\"form-group\">\n        <label for=\"add-question-text\">Question</label>\n      <input type=\"text\" name=\"text\" id =\"add-question-text\" class=\"form-control\" placeholder=\"question text\" required />\n    </div>\n  </form>\n</div>\n    <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn edit-btn\" piece_id="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1._id : stack1), depth0))
    + " id=\"add-question-btn\">Add</button>\n    </div>\n  </div>\n</div>\n</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            "
    + escapeExpression(((helper = (helper = helpers['form-error'] || (depth0 != null ? depth0['form-error'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"form-error","hash":{},"data":data}) : helper)))
    + "\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['question-panel'], '      ', 'question-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.contributions : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['contribution-panel'], '        ', 'contribution-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<button class=\"btn btn-sm back-to-exhibit\" id="
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1.exhibit : stack1)) != null ? stack1._id : stack1), depth0))
    + ">Back to Exhibit</button>\n\n<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n<h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1.artist : stack1), depth0))
    + "</h2>\n<h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1.year : stack1), depth0))
    + "</h3>\n\n<div class=\"error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n\n<div class=\"row\">\n  <div class = 'image-panel col-md-6'>\n  <img src="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.piece : depth0)) != null ? stack1.image : stack1), depth0))
    + " class=\"img-responsive piece-img\"> </img>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.createdBy : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </div>\n\n  <div class=\"conversation-panel col-md-6\">\n    <h3> Conversation </h3>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.createdBy : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.conversation : depth0), {"name":"each","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['question-panel'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(((helper = (helper = helpers['form-error'] || (depth0 != null ? depth0['form-error'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"form-error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"panel-primary question\">\n	<div class=\"panel-heading question-header\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.local : stack1)) != null ? stack1.username : stack1), depth0))
    + "</div>\n	<div class=\"panel-body question\">"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</div>\n\n    <!-- Form for adding a contribution -->\n    	<button class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#add-contribution-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-modal\" id=\"add-contribution-modal-btn\"> Contribute! </button>\n    	<!-- Modal -->\n    	<div class=\"modal fade add-contribution-modal\" id=\"add-contribution-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add-contribution-modal-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\"> \n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n          </button>\n          <h3 class=\"modal-title\" id=\"add-contribution-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-modal-label\">Contribute!</h3>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['form-error'] : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n     	<form id=\"add-contribution-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-form\" class=\"form-inline\">\n         	<div class=\"form-group\">\n     	    	<label for=\"add-contribution-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-text\">Your Response</label>\n    			<input type=\"text\" name=\"text\" id =\"add-contribution-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "-text\" class=\"form-control\" placeholder=\"contribution text\" required />\n    		</div>\n    	</form>\n    </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn edit-btn add-contribution-btn\" id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Add</button>\n        </div>\n      </div>\n    </div>\n    </div>\n</div>";
},"useData":true});
templates['resource-panel'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h3>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n<a href="
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + " target=\"_blank\"  > "
    + escapeExpression(((helper = (helper = helpers.highlight || (depth0 != null ? depth0.highlight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"highlight","hash":{},"data":data}) : helper)))
    + "</a>\n<button class=\"edit-btn btn-sm\" id=\"save-resource-btn\" resource_id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Save</button>";
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
  return buffer + "  </div>\n  <form id=\"signup-form\">\n    <div class=\"form-group\"><input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required /></div>\n    <div class=\"form-group\"><input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required /></div>\n    <div class=\"form-group\"><input type=\"password\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required /></div>\n<!--     <div class=\"form-group\"><input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Your MIT Email\" required /></div> -->\n<!--     <div class=\"form-group\"><input type=\"text\" name=\"role\" class=\"form-control\" placeholder=\"Role\" required /></div> -->\n    <button type=\"submit\" class =\"btn btn-default\" id=\"signup-submit\"> Sign Up </button>\n  </form>\n</div>";
},"useData":true});
templates['user'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['resource-panel'], '			', 'resource-panel', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "				<div class=\"col-md-3 col-sm-4\">\n";
  stack1 = this.invokePartial(partials['exhibit-preview'], '					', 'exhibit-preview', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<h5> "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + " </h5>\n			<button class=\"btn view-piece-btn\" id="
    + escapeExpression(((helper = (helper = helpers.piece || (depth0 != null ? depth0.piece : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"piece","hash":{},"data":data}) : helper)))
    + ">View</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class = \"container\" id=\"user-page\" data-user-id ="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n	<div class = \"page-header\">\n		<h1> Welcome "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.username : stack1), depth0))
    + " </h1>\n	</div>\n\n	<div id=\"saved-resources\">\n		<h2>Saved Resources</h2>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.saved : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n\n	<div id=\"visited-exhbits\">\n		<h2>Visited Exhibits</h2>\n		<div class=\"row\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.visited : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n\n	<div id=\"questions-contributed\">\n		<h2>Questions You Have Contributed To</h2>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.contributed : stack1), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>";
},"usePartial":true,"useData":true});
templates['welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div background=\"../images/welcome.jpeg\" id=\"welcome\">\n	<div class=\"welcome\">\n	<div class = \"page-header jumbotron\">\n		<h1>Welcome to the Art Explorer</h1>\n		<h3>\n			for the <a href=\"https://listart.mit.edu\" target=\"_blank\">MIT List Visual Art Center</a>\n		</h3>\n        <div class=\"nav nav-pills\">\n	 	<li><button class=\"btn btn-default\" id = \"signup-btn\"> Signup</button></li>\n	  	<li><button class=\"btn btn-default\" id=\"login-btn\"> Login</button> </li>\n	</div>\n	</div>\n	</div>\n\n</div>";
  },"useData":true});
})();
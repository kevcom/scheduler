$(document).ready(function() {
	$("#sendToInvitees").click(function(e) {
		e.preventDefault();
		var meeting_name = $.trim($("#meeting-name input").val());
		var range_left = $(".range-left").val();
		var range_right = $(".range-right").val();
		if (meeting_name.length == 0) {
			$("#meeting-name input").focus();
			$("#meeting-name").addClass("has-error");
			$("#meeting-name-error").removeClass("hidden");
			return false;
		} else {
			$("#meeting-name").removeClass("has-error");
			$("#meeting-name-error").addClass("hidden");
			$("#modal-title-insert").html(meeting_name);
		}				 
	});
	
	$("#meeting-name input").keyup(function(el) {
		if (($.trim($(this).val()).length)) {
			$("#meeting-name").addClass("has-success");
		} else {
			$("#meeting-name").removeClass("has-success");
		}			
	});
	
	$("input[type='email']").each(function() {
		$(this).change(function(el) {
			validateEmail(this);
		});
		$(this).keyup(function(el) {
			validateEmail(this);
		});
		$(this).change();
	})

	$("#sendInviteesSubmit").click(function() {
		var email0Success = $("#email0").parent(".form-group").hasClass("has-success");
		var totalEmailSuccess = 0;
		$("[id^=email]").each(function() {
			if ($(this).parent(".form-group").hasClass("has-success"))
				totalEmailSuccess++;
		});
		
		if (email0Success && totalEmailSuccess > 1) {
			submit();
			$("#form-error-email").addClass("hidden");
		} else {
			$("#form-error-email").removeClass("hidden");
			return false;
		}

	});
});

function validateEmail(el) {
	if (($.trim($(el).val()) == '')) {
		$(el).parent(".form-group").removeClass("has-error");
		$(el).parent(".form-group").removeClass("has-success");
	}
	else if (isEmail($(el).val())) {
		$(el).parent(".form-group").removeClass("has-error");
		$(el).parent(".form-group").addClass("has-success");
	}
	else {
		$(el).parent(".form-group").addClass("has-error");
		$(el).parent(".form-group").removeClass("has-success");
	}
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
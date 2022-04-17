		var mouseposX = null;
		var mouseposY = null;
		var captured = false;
		var captured_id = "";
		
		$(document).on("mousedown", ".popupDlg", function(a){
			mouseposX = a.clientX;
			mouseposY = a.clientY;
			captured = true;
			
			captured_id = $(this).attr("data-id");
		})	


		$(document).on("mousemove", function(a){
			if(captured == true){
				var tempX = a.clientX;
				var tempY = a.clientY;
				
				var moveX = tempX - mouseposX;
				var moveY = tempY - mouseposY;
				position = $("#" + captured_id).position();	
				$("#" + captured_id).css("left", position.left + moveX);
				$("#" + captured_id).css("top", position.top + moveY);					
				mouseposX = a.clientX;
				mouseposY = a.clientY;
				var str = "";
				
				return false;
			
			}
		})
		$(document).on("mouseup", function(){
			
			captured = false;
			captured_id = "";
		})		
// popup 시 background z-index 설정
// popup안에서 다시 popup을 호출 할 경우 아래 function을 호출 
		function setBackgroundIndex(){

			var bg = $(".arcDialogDoc-overlay");
			
			var t = $(".popupDlg");
			var z_index = 0;
			var t_index = 0;
			var dID = "";
			
			for(var i = 0; i < t.length; i++){
			
				dID = $(t[i]).attr("data-id");
				if($("#" + dID).css("z-index") != null){
					t_index = $("#" + dID).css("z-index");
					if(t_index >  z_index){
						z_index = t_index;
					}
				}
			}
			if(z_index > 0)
				$(bg).css("z-index", z_index);
		}
		
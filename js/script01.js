window.addEventListener("load",initDate,false);
	function initDate(){
		getCurrentDatetime();
		function getCurrentDatetime(){
			//显示具体时间
			var pad = function(n){
				return n<10?'0'+n :n;
			}
			var time=new Date();
			var nowTime=time.getFullYear()+"-"+pad(time.getMonth()+1)+"-"+pad(time.getDate());
			var nowtime=pad(time.getHours())+":"+pad(time.getMinutes())+":"+pad(time.getSeconds());
			var NowTime=nowTime+" "+nowtime+" "+getWeek();
			setTimeout(getCurrentDatetime,1000);
			
			//判断星期几
			function getWeek(nowTime){ 
						if(nowTime == null || typeof nowTime =="undefined"){
							var date = new Date; 
						}else{ 
							var dateArray = nowTime.split("-"); 
							var date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]); 
						} 
						var weeks = new Array("日", "一", "二", "三", "四", "五", "六");
						return "星期" + weeks[date.getDay()]; 
						return "星期" + "日一二三四五六".charAt(date.getDay);
					}
			
			document.getElementById("show").innerHTML=NowTime;
		}	
	}
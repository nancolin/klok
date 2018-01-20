function getTime(timeFormat) {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var ampm = hours < 12 ? "AM" : "PM";
	if (timeFormat == 12) {
		return (hours < 12 ? hours : hours === 0 ? 12 : hours-12) + ":" +
				(minutes < 10 ? "0" + minutes : minutes) + ":" +
				(seconds < 10 ? "0" + seconds : seconds) + " " + ampm;
	} else if (timeFormat == 24) {
		return (hours < 10 ? "0" + hours : hours) + ":" +
				(minutes < 10 ? "0" + minutes : minutes) + ":" +
				(seconds < 10 ? "0" + seconds : seconds);
	} else if (timeFormat === "local") {
		return date.toLocaleTimeString();
	} else if (timeFormat === "millis") {
		return date.getTime();
	} else if (timeFormat === "offset") {
		return "Timezone Offset = " + date.getTimezoneOffset();
	} else {
		return "Invalid Time Format."
	}
}

var kanji = ["〇","一","二","三","四","五","六","七","八","九","十","午前","午後"];

var transform = {

	toKanji : function(time) {

		var isAM = RegExp(/AM/i).test(time);
		var isPM = RegExp(/PM/i).test(time);
		if (isAM) {
			time = time.replace(/\sAM/i, "");
			time = time.replace(/^/, kanji[11] + " "); // time = kanji[11] + " " + time;
		} else if (isPM) {
			time = time.replace(/\sPM/i, "");
			time = time.replace(/^/, kanji[12] + " "); // time = kanji[12] + " " + time;
		}

		time = time.replace(/([2-9])?(?=[1-9])/g, function($0, $1){
			return $1 ? $1 + kanji[10] : $0;
		}); // Add a 十 between numbers 20 or greater
		time = time.replace(/([2-5])?0/g, function($0, $1){
			return $1 ? $1 + kanji[10] : $0;
		}); // Transform 0 to 十 when minutes are 20 or greater by 10*?

		// time = time.replace(/(?<=[2-9])(?=[1-9])/g, kanji[10]); // Add a 十 between numbers 20 or greater
		// time = time.replace(/(?<=[2-5])0/g, kanji[10]); // Transform 0 to 十 when minutes are 20 or greater by 10*?

		time = time.replace(/1(?=[1-9])/g, kanji[10]); // When 1 is followed by a number from 1-9, transforms to 十
		time = time.replace(/10/g, kanji[10] + kanji[0]); // Transform 10 to 十
		time = time.replace(/0/g, kanji[0]); // Transform remaining 0s

		time = time.replace(/1/g, kanji[1]);
		time = time.replace(/2/g, kanji[2]);
		time = time.replace(/3/g, kanji[3]);
		time = time.replace(/4/g, kanji[4]);
		time = time.replace(/5/g, kanji[5]);
		time = time.replace(/6/g, kanji[6]);
		time = time.replace(/7/g, kanji[7]);
		time = time.replace(/8/g, kanji[8]);
		time = time.replace(/9/g, kanji[9]);

		return time;

	},

	toSimpleKanji : function(time) {
		var isAM = RegExp(/AM/i).test(time);
		var isPM = RegExp(/PM/i).test(time);
		if (isAM) {
			time = time.replace(/\sAM/i, "");
			time = time.replace(/^/, kanji[11] + " "); // time = kanji[11] + " " + time;
		} else if (isPM) {
			time = time.replace(/\sPM/i, "");
			time = time.replace(/^/, kanji[12] + " "); // time = kanji[12] + " " + time;
		}

		time = time.replace(/0/g, kanji[0]);
		time = time.replace(/1/g, kanji[1]);
		time = time.replace(/2/g, kanji[2]);
		time = time.replace(/3/g, kanji[3]);
		time = time.replace(/4/g, kanji[4]);
		time = time.replace(/5/g, kanji[5]);
		time = time.replace(/6/g, kanji[6]);
		time = time.replace(/7/g, kanji[7]);
		time = time.replace(/8/g, kanji[8]);
		time = time.replace(/9/g, kanji[9]);

		return time;
	},

	toJapanese : function(time) {

		var isAM = RegExp(/AM/i).test(time);
		var isPM = RegExp(/PM/i).test(time);
		if (isAM) {
			time = time.replace(/\sAM/i, "");
			time = time.replace(/^/, kanji[11] + " "); // time = kanji[11] + " " + time;
		} else if (isPM) {
			time = time.replace(/\sPM/i, "");
			time = time.replace(/^/, kanji[12] + " "); // time = kanji[12] + " " + time;
		}

		return time;

	}

}

function updateTime() {
	time24hSK.innerHTML = transform.toSimpleKanji(getTime(24));
}

function init() {

	var time24hSK = document.getElementById('time24hSK');

	var imageCounter = 1;
	var image1 = document.getElementById('image1');
	var image2 = document.getElementById('image2');
	var image3 = document.getElementById('image3');
	var image4 = document.getElementById('image4');

	updateTime();

	setInterval(function(){
		updateTime();
	},1000);

	setInterval(function(){
		if (imageCounter === 0) {
			image1.src = "image/IMG1.jpg";
			setTimeout(function(){image2.src = "image/IMG2.jpg";},1000);
			setTimeout(function(){image3.src = "image/IMG3.jpg";},2000);
			setTimeout(function(){image4.src = "image/IMG4.jpg";},3000);

			imageCounter = 1;
		} else {
			image1.src = "image/IMG5.jpg";
			setTimeout(function(){image2.src = "image/IMG6.jpg";},1000);
			setTimeout(function(){image3.src = "image/IMG7.jpg";},2000);
			setTimeout(function(){image4.src = "image/IMG8.jpg";},3000);

			imageCounter = 0;
		}
	},4000);

}

// window.onload = function() {
// 	init();
// }

// var hour = (function {
// 	if (hours > 12) return hours-12; else return hours;
// }());

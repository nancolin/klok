class Klok {

	constructor(targetElementSelector) {

		this.targetElement = document.querySelector(targetElementSelector);

		this.kanji = ["〇","一","二","三","四","五","六","七","八","九","十","午前","午後"];

		this.transform = {

			toKanji: (time) => {
				var isAM = RegExp(/AM/i).test(time);
				var isPM = RegExp(/PM/i).test(time);
				if (isAM) {
					time = time.replace(/\sAM/i, "");
					time = time.replace(/^/, this.kanji[11] + " "); // time = this.kanji[11] + " " + time;
				} else if (isPM) {
					time = time.replace(/\sPM/i, "");
					time = time.replace(/^/, this.kanji[12] + " "); // time = this.kanji[12] + " " + time;
				}

				time = time.replace(/([2-9])?(?=[1-9])/g, ($0, $1) => {
					return $1 ? $1 + this.kanji[10] : $0;
				}); // Add a 十 between numbers 20 or greater
				time = time.replace(/([2-5])?0/g, ($0, $1) => {
					return $1 ? $1 + this.kanji[10] : $0;
				}); // Transform 0 to 十 when minutes are 20 or greater by 10*?

				// time = time.replace(/(?<=[2-9])(?=[1-9])/g, this.kanji[10]); // Add a 十 between numbers 20 or greater
				// time = time.replace(/(?<=[2-5])0/g, this.kanji[10]); // Transform 0 to 十 when minutes are 20 or greater by 10*?

				time = time.replace(/1(?=[1-9])/g, this.kanji[10]); // When 1 is followed by a number from 1-9, transforms to 十
				time = time.replace(/10/g, this.kanji[10] + this.kanji[0]); // Transform 10 to 十
				time = time.replace(/0/g, this.kanji[0]); // Transform remaining 0s

				time = time.replace(/1/g, this.kanji[1]);
				time = time.replace(/2/g, this.kanji[2]);
				time = time.replace(/3/g, this.kanji[3]);
				time = time.replace(/4/g, this.kanji[4]);
				time = time.replace(/5/g, this.kanji[5]);
				time = time.replace(/6/g, this.kanji[6]);
				time = time.replace(/7/g, this.kanji[7]);
				time = time.replace(/8/g, this.kanji[8]);
				time = time.replace(/9/g, this.kanji[9]);

				return time;
			},

			toSimpleKanji: (time) => {
				var isAM = RegExp(/AM/i).test(time);
				var isPM = RegExp(/PM/i).test(time);
				if (isAM) {
					time = time.replace(/\sAM/i, "");
					time = time.replace(/^/, this.kanji[11] + " "); // time = this.kanji[11] + " " + time;
				} else if (isPM) {
					time = time.replace(/\sPM/i, "");
					time = time.replace(/^/, this.kanji[12] + " "); // time = this.kanji[12] + " " + time;
				}

				time = time.replace(/0/g, this.kanji[0]);
				time = time.replace(/1/g, this.kanji[1]);
				time = time.replace(/2/g, this.kanji[2]);
				time = time.replace(/3/g, this.kanji[3]);
				time = time.replace(/4/g, this.kanji[4]);
				time = time.replace(/5/g, this.kanji[5]);
				time = time.replace(/6/g, this.kanji[6]);
				time = time.replace(/7/g, this.kanji[7]);
				time = time.replace(/8/g, this.kanji[8]);
				time = time.replace(/9/g, this.kanji[9]);

				return time;
			},

			toJapanese: (time) => {

				var isAM = RegExp(/AM/i).test(time);
				var isPM = RegExp(/PM/i).test(time);
				if (isAM) {
					time = time.replace(/\sAM/i, "");
					time = time.replace(/^/, this.kanji[11] + " "); // time = this.kanji[11] + " " + time;
				} else if (isPM) {
					time = time.replace(/\sPM/i, "");
					time = time.replace(/^/, this.kanji[12] + " "); // time = this.kanji[12] + " " + time;
				}

				return time;
			}

		}

		this.init();
	}

	init() {
		let imageCounter = 1;
		const image1 = document.getElementById('image1');
		const image2 = document.getElementById('image2');
		const image3 = document.getElementById('image3');
		const image4 = document.getElementById('image4');

		this.updateTime();

		setInterval(() => {
			this.updateTime();
		}, 1000);

		setInterval(() => {
			if (imageCounter === 0) {
				image1.src = "image/IMG1.jpg";
				setTimeout(() => {image2.src = "image/IMG2.jpg";}, 1000);
				setTimeout(() => {image3.src = "image/IMG3.jpg";}, 2000);
				setTimeout(() => {image4.src = "image/IMG4.jpg";}, 3000);

				imageCounter = 1;
			} else {
				image1.src = "image/IMG5.jpg";
				setTimeout(() => {image2.src = "image/IMG6.jpg";}, 1000);
				setTimeout(() => {image3.src = "image/IMG7.jpg";}, 2000);
				setTimeout(() => {image4.src = "image/IMG8.jpg";}, 3000);

				imageCounter = 0;
			}
		}, 4000);
	}

	getTime(timeFormat) {
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

	updateTime() {
		this.targetElement.innerHTML = this.transform.toSimpleKanji(this.getTime(24));
	}

}

document.addEventListener('DOMContentLoaded', () => {
	window.klok = new Klok('#time24hSK');
});

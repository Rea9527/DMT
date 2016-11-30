window.onload = function() {

	$(".button-collapse").sideNav();

	var setOnScroll = function() {
		window.onscroll = function() {
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			if (t > 50) {
				$('.header').addClass('header-scroll');
			} else {
				$('.header').removeClass('header-scroll');
			}
		}
	}

	var toggleSvg = function() {
		var audio = $("#myAudio")[0];
		var playSvg = $('play-svg');
		var pauseSvg = $('pause-svg');
		console.log(audio.paused);
		if (audio.paused) {
			$('#play-svg').removeClass('display-none');
			$('#pause-svg').addClass('display-none');
			$('#apb').removeClass('bg-pink');
		} else {
			$('#play-svg').addClass('display-none');
			$('#pause-svg').removeClass('display-none');
			$('#apb').addClass('bg-pink');
		}
	}

	var setAudio = function() {
		var audio = $("#myAudio")[0];
		var music = ["RiverFlowsInYou.mp3", "MakeYouFeelMyLove.mp3", 'TheTruthThatYouLeave.mp3'];
		$('#play-btn').click(function() {
			if (audio.paused) {
				audio.play();
				toggleSvg();
			} else {
				audio.pause();
				toggleSvg();
			}
		});

		$('#next-btn').click(function() {
			var src = audio.src;
			var prefix = src.substring(0, src.lastIndexOf('/') + 1);
			var name = src.substring(src.lastIndexOf('/') + 1);
			var index = music.indexOf(name);
			audio.src = prefix + music[(index + 1) % 3]
			audio.play();
			toggleSvg();
		});

		$('#previous-btn').click(function() {
			var src = audio.src;
			var prefix = src.substring(0, src.lastIndexOf('/') + 1);
			var name = src.substring(src.lastIndexOf('/') + 1);
			var index = music.indexOf(name);
			index = index - 1 < 0 ? 2 : index - 1;
			audio.src = prefix + music[index];
			audio.play();
			toggleSvg();
		});
	}

	
	var draw = function() {
	    var canvas = document.getElementById("canvas");
	    if (canvas == null) return false;
	    var context = canvas.getContext('2d');
	    var n = 0;
	    for (var i = 0; i < 10; i++) {
	      context.beginPath();
	      context.arc(i * 20, i * 20, i * 8, 0, Math.PI * 2, true);
	      context.closePath();
	      context.fillStyle = 'rgba(255, 0, 0, 0.25)';
	      context.fill();
	    }
	}

	setOnScroll();
	setAudio();
}


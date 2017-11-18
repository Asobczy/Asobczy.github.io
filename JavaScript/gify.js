$.ajax({
		type: 'GET',
		url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog",
		success: function(data) { printGif1(data); }
	});

	function printGif1(data) {
		var imageSource = `<img src=${data.data.image_url} alt='Dog!'>`;
			$("#gif1").html(imageSource);
	}

	$.ajax({
		type: 'GET',
		url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat",
		success: function(data) { printGif2(data); }
	});

	function printGif2(data) {
		var imageSource = `<img src=${data.data.image_url} alt='Cat!'>`;
			$("#gif2").html(imageSource);
	}
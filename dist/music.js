const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "明天你好",
        artist: '牛奶咖啡',
        url: 'https://music.163.com/song/media/outer/url?id=33756016.mp3',
        cover: 'https://p1.music.126.net/1Al0vrBmm5-HtNXyJH953w==/7952767605403009.jpg',
	lrc: '../lrc/明天你好.lrc',
      },  
    ]
});

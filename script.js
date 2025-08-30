$(function(){

    if (!$('.envelope').hasClass('open')){
      $('.envelope').click(function(){
        $(this).removeClass('new').addClass('open');
      });
    }
    
  });


  document.getElementById('playButton').addEventListener('click', function () {
  const audio = document.getElementById('myAudio');
  audio.play()
    .then(() => {
      this.style.display = 'none'; // hides button after play
    })
    .catch(error => {
      console.error("Playback failed:", error);
    });
});






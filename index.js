
var buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<buttons;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{
  var ans=this.innerHTML
makesound(ans);
animation(ans);
});
}

function makesound(key)
{
  switch (key) {
    case 'w':
    var audio=new Audio("kick-bass.mp3");
    audio.play();
      break;

      case 'a':
      var audio=new Audio("snare.mp3");
      audio.play();
        break;

        case 's':
        var audio=new Audio("tom-2.mp3");
        audio.play();
          break;

          case 'd':
          var audio=new Audio("crash.mp3");
          audio.play();
      break;

            case 'j':
            var audio=new Audio("tom-1.mp3");
            audio.play();
              break;

              case 'k':
              var audio=new Audio("tom-3.mp3");
              audio.play();
                break;

                case 'l':
                var audio=new Audio("tom-4.mp3");
                audio.play();
                  break;



  }
}

document.addEventListener("keydown",function(event)
{
  makesound(event.key);
  animation(event.key);
});

function animation(key)
{
  var a=document.querySelector("."+key);
  a.classList.add("pressed");
  setTimeout(function()
{
    a.classList.remove("pressed");
},150);
}

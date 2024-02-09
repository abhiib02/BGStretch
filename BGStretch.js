function BGStretch(Element, Images_Array) {


    document.addEventListener("DOMContentLoaded", function() {
      Images_Array.forEach((image,index)=>{
            var tempImage = new Image();
            tempImage.src = Images_Array[index];
      })
    });

  let SelectedElement = document.querySelector(Element);
  let kf = document.createElement('style');
  let ks = '';
  let TotalImages = Images_Array.length;
  let randomNumber = Math.floor(Math.random()*10000);
  if(SelectedElement.dataset.steps != undefined)
    {
      SelectedElement.style.animation = 
        `ul_anim_${randomNumber}
        ${SelectedElement.dataset.duration*TotalImages}s 
        steps(${SelectedElement.dataset.steps}, end) 
        infinite`;
    }
    else
    {
      SelectedElement.style.animation = 
        `ul_anim_${randomNumber} 
        ${SelectedElement.dataset.duration*TotalImages}s 
        infinite`;
    }
    
  
    Images_Array.forEach((image,index)=>{
      if (index == TotalImages - 1) {
            ks += 
              `${(100/TotalImages)*index}%,${100}%
                {background-image:url('${image}')}`;
        } 
      else 
      {
            ks += 
              `${index*(100/TotalImages)}%,${(100/TotalImages)*index+1}%
              {background-image:url('${image}')}`;
        }
    })
    
    kf.innerHTML = `@keyframes ul_anim_${randomNumber} {${ks}}`;
  
    document.head.appendChild(kf)
}

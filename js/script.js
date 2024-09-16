document.addEventListener("DOMContentLoaded", function() {
    const photoContainer = document.querySelector('.photo');
    const grossephotoContainer = document.querySelector('.grossephoto');

    photoContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const imgSrc = event.target.src;
            const imgTitle = event.target.getAttribute('data-title');
            const imgComment = event.target.getAttribute('data-comment');



            grossephotoContainer.innerHTML = `
            <div>
             <h2 class="custom-font">${imgTitle}</h2>
                <img src="${imgSrc}" alt="Grosse photo">
               <p>${imgComment}</p>
            </div>
        `; 

        }
    });
});



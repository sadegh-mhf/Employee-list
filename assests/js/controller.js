function addCard({firstName, email, avatar, lastName}){
    let cardHtml = `<div class="col-4 my-2">
    <div class="w-100 h-100 box p-3 d-flex">
      <div class="rounded" style="width: 130px;">
        <img class="rounded" src="${avatar}" style="width: 100%; height: 100%;"
          alt="">
      </div>
      <div class="d-flex flex-column ps-3 justify-content-center">
        <div class="title-text">${firstName}</div>
        <div class="normal-text">${lastName}</div>
        <div class="email-text">${email}</div>
      </div>
    </div>
  </div>`

  $('#cardWrapper').append(cardHtml)
}
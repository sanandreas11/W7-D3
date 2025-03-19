const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        console.log("May you find your book in this place.", response)
        return response.json()
      } else {
        throw new Error("Invitation denied")
      }
    })
    .then((books) => {
      console.log("Books of the day", books)

      const cardPosition = document.getElementById("card-area")

      books.forEach((book) => {
        const cards = document.createElement("div")
        cards.classList.add("col-4")

        cards.innerHTML = `
            <div class="card card-height my-3">
              <img class="card-img-top" src="${book.img}" alt="Book Cover" />
              <div class="card-body bg-dark">
                <h5 class="card-title text-white">${book.title}</h5>
                <p class="card-text text-white">${book.price} €</p>
                <a href="#" class="btn btn-outline-danger delete-button">Burn Book</a>
              </div>
            </div>`

        // Append the card to the container
        cardPosition.appendChild(cards)

        const deleteButton = cards.querySelector(".delete-button")
        deleteButton.addEventListener("click", (event) => {
          event.preventDefault()
          cards.remove() // Remove the card from the DOM
        })
      })
    })
    .catch((err) => {
      console.log("Your book isn't here...", err)
    })
}

getBooks()

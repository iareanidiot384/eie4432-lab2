function calculatePrice() {
  const drink = document.getElementById("drink").value;
  const radios = document.getElementsByName("size");
  let size;

  // Get the selected size
  for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          size = radios[i].id;
          break;
      }
  }

  // Calculate the price based on the drink and size
  let price = 0;
  if (drink === "iced-latte") {
      if (size === "ds1") {
          price = 20;
      } else if (size === "ds2") {
          price = 35;
      } else if (size === "ds3") {
          price = 40;
      }
  } else if (drink === "bml") {
      if (size === "ds1") {
          price = 25;
      } else if (size === "ds2") {
          price = 40;
      } else if (size === "ds3") {
          price = 45;
      }
  } else if (drink === "iced-mocha") {
    if (size === "ds1") {
        price = 30;
    } else if (size === "ds2") {
        price = 45;
    } else if (size === "ds3") {
        price = 50;
    }
  }

  // Update the price display
  const priceElement = document.getElementById("price");
  priceElement.textContent = price;
}

function showMsg() {
  var txt;
  if (confirm("Submit your order?")) {
    txt = "Thanks for ordering! We have received your order!";
  } else {
    txt = " ";
  }
  document.getElementById("postSubmit").innerHTML = txt;
}

function placeOrder(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var ice = document.getElementById("ice").value;
  var sweetness = document.getElementById("sweetness").value;

  // Create order object
  var order = {
      name: name,
      ice: ice,
      sweetness: sweetness
  };

  // Save order data to localStorage
  localStorage.setItem("order", JSON.stringify(order));

  // Reset the form
  document.getElementById("orderForm").reset();
}
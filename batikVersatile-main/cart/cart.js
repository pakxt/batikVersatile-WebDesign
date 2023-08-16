// add/minus quantity of product
$(function() {

    $(".product-quantity").append('<div class="add-btn button">+</div><div class="minus-btn button">-</div>');
    $(".button").on("click", function() {
  
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
  
      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
         // Don't allow decrementing below 1
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
          } else {
          newVal = 1;
        }
        }
  
      $button.parent().find("input").val(newVal);
  
    });
  
});

// Calculate product total and cart total
function calculateTotal()
{
  let unit_price={
    men: 50,
    women: 50,
    accessory: 30 
  };
  let item_price={}
  
  item_price.men = ($("#quantity1").val() * unit_price.men )
  $("#men-price").text((item_price.men).toFixed(2));
  
  item_price.women = ($("#quantity2").val() * unit_price.women )
  $("#women-price").text((item_price.women).toFixed(2));
  
  item_price.accessory = ($("#quantity3").val() * unit_price.accessory )
  $("#accessory-price").text((item_price.accessory).toFixed(2));  
  
  let total = item_price.men + item_price.women + item_price.accessory;
  total = total.toFixed(2);
 
  $("#cart-total-value").text(total);
  
}

$(function()
{
    $(".quantity").on("change keyup",calculateTotal)
    $(".button").on("click", calculateTotal)
})
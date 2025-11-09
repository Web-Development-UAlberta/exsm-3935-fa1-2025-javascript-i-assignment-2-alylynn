async function main() {
  let totalCost = await input("Please enter the total cost of the goods: ");
  let cashPaid = await input("Please enter the amount of cash received from the customer: ");
  let discount = await input("Please enter a discount code (0-5): ");
  
  switch(discount) {
    case "0":
      discount = 0;
      break;
    case "1":
      discount = 0.1;
      break;
    case "2":
      discount = 0.15;
      break;
    case "3":
      discount = 0.25;
      break;
    case "4":
      discount = 0.35;
      break;
    case "5":
      discount = 0.4;
      break;
    default:
      output("Invalid discount code - please enter a code between 0-5 .");
      break;
  }

  let discountedCost = totalCost - (totalCost * discount);
  let changeDue = cashPaid - discountedCost;
  if (discount < 0 || discount > 5) {
    output("Invalid discount code");
    } else if (cashPaid < discountedCost) {
    output("Insufficient payment!");
    } else { 
    output("Please give the customer $" + changeDue + " change.");
    }
  }

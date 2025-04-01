function calculateROI() {
  const cpc = parseFloat(document.getElementById("cpc").value);
  const adSpend = parseFloat(document.getElementById("adSpend").value);
  const conversionRate = parseFloat(
    document.getElementById("conversionRate").value
  );
  const closeRate = parseFloat(document.getElementById("closeRate").value);
  const customerValue = parseFloat(
    document.getElementById("customerValue").value
  );

  if (
    isNaN(cpc) ||
    isNaN(adSpend) ||
    isNaN(conversionRate) ||
    isNaN(closeRate) ||
    isNaN(customerValue)
  ) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  if (cpc <= 0 || adSpend <= 0) {
    alert("CPC and Ad Spend must be greater than zero.");
    return;
  }

  // Calculations
  const clicks = adSpend / cpc; // Total Clicks
  const conversions = clicks * (conversionRate / 100); // Conversions
  const customers = conversions * (closeRate / 100); // Total Customers
  const totalRevenue = customers * customerValue; // Revenue
  const roi = ((totalRevenue - adSpend) / adSpend) * 100; // ROI Percentage
  const cpl = conversions > 0 ? adSpend / conversions : 0; // Cost Per Lead

  // Update results
  document.getElementById("resultClicks").textContent = clicks.toFixed(0);
  document.getElementById("resultConversions").textContent =
    conversions.toFixed(0);
  document.getElementById("resultCustomers").textContent = customers.toFixed(0);
  document.getElementById("resultRevenue").textContent =
    "₹" + totalRevenue.toLocaleString();
  document.getElementById("resultROI").textContent = roi.toFixed(2) + "%";
  document.getElementById("resultCPL").textContent = "₹" + cpl.toFixed(2); // Display CPL

  document.getElementById("result").style.display = "block";
}
document.getElementById("hamburger").addEventListener("click", function () {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
});

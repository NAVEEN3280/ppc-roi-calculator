function calculateROI() {
  const adSpend = parseFloat(document.getElementById("adSpend").value);
  const clicks = parseFloat(document.getElementById("clicks").value);
  const conversionRate = parseFloat(
    document.getElementById("conversionRate").value
  );
  const revenuePerConversion = parseFloat(
    document.getElementById("revenuePerConversion").value
  );

  if (
    isNaN(adSpend) ||
    isNaN(clicks) ||
    isNaN(conversionRate) ||
    isNaN(revenuePerConversion)
  ) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  if (clicks === 0) {
    alert("Clicks cannot be zero.");
    return;
  }

  if (adSpend === 0) {
    alert("Ad spend must be greater than zero.");
    return;
  }

  const cpc = adSpend / clicks; // Cost Per Click
  const totalConversions = clicks * (conversionRate / 100); // Total Conversions
  const totalRevenue = totalConversions * revenuePerConversion; // Total Revenue
  const roi = ((totalRevenue - adSpend) / adSpend) * 100; // ROI Percentage

  document.getElementById("cpc").textContent = cpc.toFixed(2);
  document.getElementById("totalConversions").textContent =
    totalConversions.toFixed(0);
  document.getElementById("totalRevenue").textContent = totalRevenue.toFixed(2);

  // If ROI is negative, display as a loss
  if (roi < 0) {
    document.getElementById("roi").textContent =
      "Loss: " + Math.abs(roi).toFixed(2) + "%";
  } else {
    document.getElementById("roi").textContent = roi.toFixed(2) + "%";
  }

  document.getElementById("result").style.display = "block";
}

// Toggle Navigation (if applicable)
document.getElementById("hamburger").addEventListener("click", function () {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
});

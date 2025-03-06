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

  const cpc = adSpend / clicks;
  const totalConversions = clicks * (conversionRate / 100);
  const totalRevenue = totalConversions * revenuePerConversion;
  const roi = ((totalRevenue - adSpend) / adSpend) * 100;

  document.getElementById("cpc").textContent = cpc.toFixed(2);
  document.getElementById("totalConversions").textContent =
    totalConversions.toFixed(0);
  document.getElementById("totalRevenue").textContent = totalRevenue.toFixed(2);
  document.getElementById("roi").textContent = roi.toFixed(2) + "%";

  document.getElementById("result").style.display = "block";
}

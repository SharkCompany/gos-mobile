export function formatCurrency(n: number) {
  if (!n) return "12.000đ"
  var parts = n.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, ",") +
    (decimalPart ? "." + decimalPart : "") +
    "đ"
  );
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("kes", { style: "currency", currency: "KES" }).format(
    value
  );

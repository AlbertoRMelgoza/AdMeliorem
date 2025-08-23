"use client";

type Props = {
  moduleSlug?: string;
  parentSlug?: string;
  label?: string;
};

export default function BuyButton({ label = "Buy (Coming Soon)" }: Props) {
  return (
    <button
      disabled
      title="Purchasing will be enabled soon. Please contact us to purchase."
      style={{
        background: "#f1c40f",
        color: "#000",
        padding: "10px 18px",
        borderRadius: 6,
        fontWeight: 700,
        border: "none",
        cursor: "not-allowed",
        opacity: 0.6,
      }}
    >
      {label}
    </button>
  );
}

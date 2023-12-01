import React from "react";

export default function Estrelas({ isActive, onClick }) {
  return (
    <button onClick={onClick}>
      {isActive && <i class="fa-solid fa-star" style="color: #4c2b17;"></i>}
      {!isActive && <i class="fa-regular fa-star" style="color: #4c2b17;"></i>}
    </button>
  );
}

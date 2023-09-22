import "./InfoTooltip.css";

function InfoTooltip({ closeAndClear, message, error }) {
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeAndClear();
    }
  };
  return (
    <div
      className={`info-tooltip ${
        error || message ? "info-tooltip_opened" : ""
      }`}
      onClick={handleOverlay}
    >
      <div className="info-tooltip__container">
        {error && (
          <>
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60 117C91.4802 117 117 91.4802 117 60C117 28.5198 91.4802 3 60 3C28.5198 3 3 28.5198 3 60C3 91.4802 28.5198 117 60 117ZM60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120ZM55.0503 60.707L36.6655 42.3223L42.3224 36.6654L60.7071 55.0502L78.3848 37.3726L84.0416 43.0294L66.364 60.707L83.3346 77.6776L77.6777 83.3345L60.7071 66.3639L43.0294 84.0416L37.3726 78.3848L55.0503 60.707Z"
                fill="#FD0707"
              />
            </svg>{" "}
          </>
        )}
        {message && (
          <>
            <svg
              className=""
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M117 60C117 91.4802 91.4802 117 60 117C28.5198 117 3 91.4802 3 60C3 28.5198 28.5198 3 60 3C91.4802 3 117 28.5198 117 60ZM120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60ZM57.5502 76.888L86.7676 48.888L81.2324 43.112L54.4277 68.7999L39.3496 57.8561L34.6504 64.3305L52.433 77.2372L55.1375 79.2001L57.5502 76.888Z"
                fill="black"
              />
            </svg>
          </>
        )}
        <h2 className="info-tooltip__message">{error || message}</h2>
        <button
          className="button info-tooltip__close-button"
          type="button"
          aria-label="Закрыть."
          onClick={closeAndClear}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;

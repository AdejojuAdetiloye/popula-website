export default function CustomButton({ action, text }) {
  return (
    <button className="custom-button" onClick={action}>
      {text}
    </button>
  );
}

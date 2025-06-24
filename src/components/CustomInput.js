export default function CustomInput({ icon, placeholder, type,value,pattern }) {
  return (
    <div className="main-input">
      <img src={icon} className="input-icon" alt="input-icon" />
      <input type={type} placeholder={placeholder} value={value} className="input" pattern={pattern}/>
    </div>
  );
}

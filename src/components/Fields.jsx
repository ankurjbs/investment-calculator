export default function Fields({ children, inputType,changeInput }) {
  return (
    <div id="user-input">
      <label htmlFor="">{children}</label>
      <input type={inputType} onChange={changeInput}/>
    </div>
  );
}

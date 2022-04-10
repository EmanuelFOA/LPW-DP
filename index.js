export function Button({ title, handleSubject }) {
  return <button
    type='button'
    onClick={handleSubject}
  >{title}
  </button>
}